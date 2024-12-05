# `dataOciCloudGuardCloudGuardConfiguration` Submodule <a name="`dataOciCloudGuardCloudGuardConfiguration` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudGuardCloudGuardConfiguration <a name="DataOciCloudGuardCloudGuardConfiguration" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_cloud_guard_configuration oci_cloud_guard_cloud_guard_configuration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardcloudguardconfiguration"

dataocicloudguardcloudguardconfiguration.NewDataOciCloudGuardCloudGuardConfiguration(scope Construct, id *string, config DataOciCloudGuardCloudGuardConfigurationConfig) DataOciCloudGuardCloudGuardConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfigurationConfig">DataOciCloudGuardCloudGuardConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfigurationConfig">DataOciCloudGuardCloudGuardConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCloudGuardCloudGuardConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardcloudguardconfiguration"

dataocicloudguardcloudguardconfiguration.DataOciCloudGuardCloudGuardConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardcloudguardconfiguration"

dataocicloudguardcloudguardconfiguration.DataOciCloudGuardCloudGuardConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardcloudguardconfiguration"

dataocicloudguardcloudguardconfiguration.DataOciCloudGuardCloudGuardConfiguration_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardcloudguardconfiguration"

dataocicloudguardcloudguardconfiguration.DataOciCloudGuardCloudGuardConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciCloudGuardCloudGuardConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciCloudGuardCloudGuardConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciCloudGuardCloudGuardConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_cloud_guard_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudGuardCloudGuardConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.property.reportingRegion">ReportingRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.property.selfManageResources">SelfManageResources</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ReportingRegion`<sup>Required</sup> <a name="ReportingRegion" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.property.reportingRegion"></a>

```go
func ReportingRegion() *string
```

- *Type:* *string

---

##### `SelfManageResources`<sup>Required</sup> <a name="SelfManageResources" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.property.selfManageResources"></a>

```go
func SelfManageResources() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudGuardCloudGuardConfigurationConfig <a name="DataOciCloudGuardCloudGuardConfigurationConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfigurationConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardcloudguardconfiguration"

&dataocicloudguardcloudguardconfiguration.DataOciCloudGuardCloudGuardConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfigurationConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_cloud_guard_configuration#compartment_id DataOciCloudGuardCloudGuardConfiguration#compartment_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardCloudGuardConfiguration.DataOciCloudGuardCloudGuardConfigurationConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_cloud_guard_configuration#compartment_id DataOciCloudGuardCloudGuardConfiguration#compartment_id}.

---



