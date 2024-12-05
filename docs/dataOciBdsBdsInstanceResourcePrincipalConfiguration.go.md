# `dataOciBdsBdsInstanceResourcePrincipalConfiguration` Submodule <a name="`dataOciBdsBdsInstanceResourcePrincipalConfiguration` Submodule" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciBdsBdsInstanceResourcePrincipalConfiguration <a name="DataOciBdsBdsInstanceResourcePrincipalConfiguration" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configuration oci_bds_bds_instance_resource_principal_configuration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstanceresourceprincipalconfiguration"

dataocibdsbdsinstanceresourceprincipalconfiguration.NewDataOciBdsBdsInstanceResourcePrincipalConfiguration(scope Construct, id *string, config DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig) DataOciBdsBdsInstanceResourcePrincipalConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig">DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig">DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciBdsBdsInstanceResourcePrincipalConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstanceresourceprincipalconfiguration"

dataocibdsbdsinstanceresourceprincipalconfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstanceresourceprincipalconfiguration"

dataocibdsbdsinstanceresourceprincipalconfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstanceresourceprincipalconfiguration"

dataocibdsbdsinstanceresourceprincipalconfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstanceresourceprincipalconfiguration"

dataocibdsbdsinstanceresourceprincipalconfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciBdsBdsInstanceResourcePrincipalConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciBdsBdsInstanceResourcePrincipalConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciBdsBdsInstanceResourcePrincipalConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciBdsBdsInstanceResourcePrincipalConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.clusterAdminPassword">ClusterAdminPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.forceRefreshResourcePrincipalTrigger">ForceRefreshResourcePrincipalTrigger</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.sessionTokenLifeSpanDurationInHours">SessionTokenLifeSpanDurationInHours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.timeTokenExpiry">TimeTokenExpiry</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.timeTokenRefreshed">TimeTokenRefreshed</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.bdsInstanceIdInput">BdsInstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.resourcePrincipalConfigurationIdInput">ResourcePrincipalConfigurationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.bdsInstanceId">BdsInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.resourcePrincipalConfigurationId">ResourcePrincipalConfigurationId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ClusterAdminPassword`<sup>Required</sup> <a name="ClusterAdminPassword" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.clusterAdminPassword"></a>

```go
func ClusterAdminPassword() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ForceRefreshResourcePrincipalTrigger`<sup>Required</sup> <a name="ForceRefreshResourcePrincipalTrigger" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.forceRefreshResourcePrincipalTrigger"></a>

```go
func ForceRefreshResourcePrincipalTrigger() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SessionTokenLifeSpanDurationInHours`<sup>Required</sup> <a name="SessionTokenLifeSpanDurationInHours" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.sessionTokenLifeSpanDurationInHours"></a>

```go
func SessionTokenLifeSpanDurationInHours() *f64
```

- *Type:* *f64

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeTokenExpiry`<sup>Required</sup> <a name="TimeTokenExpiry" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.timeTokenExpiry"></a>

```go
func TimeTokenExpiry() *string
```

- *Type:* *string

---

##### `TimeTokenRefreshed`<sup>Required</sup> <a name="TimeTokenRefreshed" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.timeTokenRefreshed"></a>

```go
func TimeTokenRefreshed() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `BdsInstanceIdInput`<sup>Optional</sup> <a name="BdsInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.bdsInstanceIdInput"></a>

```go
func BdsInstanceIdInput() *string
```

- *Type:* *string

---

##### `ResourcePrincipalConfigurationIdInput`<sup>Optional</sup> <a name="ResourcePrincipalConfigurationIdInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.resourcePrincipalConfigurationIdInput"></a>

```go
func ResourcePrincipalConfigurationIdInput() *string
```

- *Type:* *string

---

##### `BdsInstanceId`<sup>Required</sup> <a name="BdsInstanceId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.bdsInstanceId"></a>

```go
func BdsInstanceId() *string
```

- *Type:* *string

---

##### `ResourcePrincipalConfigurationId`<sup>Required</sup> <a name="ResourcePrincipalConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.resourcePrincipalConfigurationId"></a>

```go
func ResourcePrincipalConfigurationId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig <a name="DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstanceresourceprincipalconfiguration"

&dataocibdsbdsinstanceresourceprincipalconfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BdsInstanceId: *string,
	ResourcePrincipalConfigurationId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig.property.bdsInstanceId">BdsInstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configuration#bds_instance_id DataOciBdsBdsInstanceResourcePrincipalConfiguration#bds_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig.property.resourcePrincipalConfigurationId">ResourcePrincipalConfigurationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configuration#resource_principal_configuration_id DataOciBdsBdsInstanceResourcePrincipalConfiguration#resource_principal_configuration_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BdsInstanceId`<sup>Required</sup> <a name="BdsInstanceId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig.property.bdsInstanceId"></a>

```go
BdsInstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configuration#bds_instance_id DataOciBdsBdsInstanceResourcePrincipalConfiguration#bds_instance_id}.

---

##### `ResourcePrincipalConfigurationId`<sup>Required</sup> <a name="ResourcePrincipalConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig.property.resourcePrincipalConfigurationId"></a>

```go
ResourcePrincipalConfigurationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configuration#resource_principal_configuration_id DataOciBdsBdsInstanceResourcePrincipalConfiguration#resource_principal_configuration_id}.

---



