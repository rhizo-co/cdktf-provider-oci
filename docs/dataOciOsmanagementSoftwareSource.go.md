# `dataOciOsmanagementSoftwareSource` Submodule <a name="`dataOciOsmanagementSoftwareSource` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsmanagementSoftwareSource <a name="DataOciOsmanagementSoftwareSource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source oci_osmanagement_software_source}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementsoftwaresource"

dataociosmanagementsoftwaresource.NewDataOciOsmanagementSoftwareSource(scope Construct, id *string, config DataOciOsmanagementSoftwareSourceConfig) DataOciOsmanagementSoftwareSource
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceConfig">DataOciOsmanagementSoftwareSourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceConfig">DataOciOsmanagementSoftwareSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsmanagementSoftwareSource resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementsoftwaresource"

dataociosmanagementsoftwaresource.DataOciOsmanagementSoftwareSource_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementsoftwaresource"

dataociosmanagementsoftwaresource.DataOciOsmanagementSoftwareSource_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementsoftwaresource"

dataociosmanagementsoftwaresource.DataOciOsmanagementSoftwareSource_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementsoftwaresource"

dataociosmanagementsoftwaresource.DataOciOsmanagementSoftwareSource_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciOsmanagementSoftwareSource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciOsmanagementSoftwareSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciOsmanagementSoftwareSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsmanagementSoftwareSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.archType">ArchType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.associatedManagedInstances">AssociatedManagedInstances</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesList">DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.checksumType">ChecksumType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.gpgKeyFingerprint">GpgKeyFingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.gpgKeyId">GpgKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.gpgKeyUrl">GpgKeyUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.maintainerEmail">MaintainerEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.maintainerName">MaintainerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.maintainerPhone">MaintainerPhone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.packages">Packages</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.parentId">ParentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.parentName">ParentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.repoType">RepoType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.softwareSourceIdInput">SoftwareSourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.softwareSourceId">SoftwareSourceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ArchType`<sup>Required</sup> <a name="ArchType" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.archType"></a>

```go
func ArchType() *string
```

- *Type:* *string

---

##### `AssociatedManagedInstances`<sup>Required</sup> <a name="AssociatedManagedInstances" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.associatedManagedInstances"></a>

```go
func AssociatedManagedInstances() DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesList">DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesList</a>

---

##### `ChecksumType`<sup>Required</sup> <a name="ChecksumType" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.checksumType"></a>

```go
func ChecksumType() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `GpgKeyFingerprint`<sup>Required</sup> <a name="GpgKeyFingerprint" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.gpgKeyFingerprint"></a>

```go
func GpgKeyFingerprint() *string
```

- *Type:* *string

---

##### `GpgKeyId`<sup>Required</sup> <a name="GpgKeyId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.gpgKeyId"></a>

```go
func GpgKeyId() *string
```

- *Type:* *string

---

##### `GpgKeyUrl`<sup>Required</sup> <a name="GpgKeyUrl" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.gpgKeyUrl"></a>

```go
func GpgKeyUrl() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaintainerEmail`<sup>Required</sup> <a name="MaintainerEmail" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.maintainerEmail"></a>

```go
func MaintainerEmail() *string
```

- *Type:* *string

---

##### `MaintainerName`<sup>Required</sup> <a name="MaintainerName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.maintainerName"></a>

```go
func MaintainerName() *string
```

- *Type:* *string

---

##### `MaintainerPhone`<sup>Required</sup> <a name="MaintainerPhone" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.maintainerPhone"></a>

```go
func MaintainerPhone() *string
```

- *Type:* *string

---

##### `Packages`<sup>Required</sup> <a name="Packages" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.packages"></a>

```go
func Packages() *f64
```

- *Type:* *f64

---

##### `ParentId`<sup>Required</sup> <a name="ParentId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.parentId"></a>

```go
func ParentId() *string
```

- *Type:* *string

---

##### `ParentName`<sup>Required</sup> <a name="ParentName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.parentName"></a>

```go
func ParentName() *string
```

- *Type:* *string

---

##### `RepoType`<sup>Required</sup> <a name="RepoType" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.repoType"></a>

```go
func RepoType() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `SoftwareSourceIdInput`<sup>Optional</sup> <a name="SoftwareSourceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.softwareSourceIdInput"></a>

```go
func SoftwareSourceIdInput() *string
```

- *Type:* *string

---

##### `SoftwareSourceId`<sup>Required</sup> <a name="SoftwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.softwareSourceId"></a>

```go
func SoftwareSourceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSource.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsmanagementSoftwareSourceAssociatedManagedInstances <a name="DataOciOsmanagementSoftwareSourceAssociatedManagedInstances" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstances"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstances.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementsoftwaresource"

&dataociosmanagementsoftwaresource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstances {

}
```


### DataOciOsmanagementSoftwareSourceConfig <a name="DataOciOsmanagementSoftwareSourceConfig" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementsoftwaresource"

&dataociosmanagementsoftwaresource.DataOciOsmanagementSoftwareSourceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	SoftwareSourceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceConfig.property.softwareSourceId">SoftwareSourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source#software_source_id DataOciOsmanagementSoftwareSource#software_source_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SoftwareSourceId`<sup>Required</sup> <a name="SoftwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceConfig.property.softwareSourceId"></a>

```go
SoftwareSourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source#software_source_id DataOciOsmanagementSoftwareSource#software_source_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesList <a name="DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesList" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementsoftwaresource"

dataociosmanagementsoftwaresource.NewDataOciOsmanagementSoftwareSourceAssociatedManagedInstancesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesList.get"></a>

```go
func Get(index *f64) DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference <a name="DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementsoftwaresource"

dataociosmanagementsoftwaresource.NewDataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstances">DataOciOsmanagementSoftwareSourceAssociatedManagedInstances</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsmanagementSoftwareSourceAssociatedManagedInstances
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSource.DataOciOsmanagementSoftwareSourceAssociatedManagedInstances">DataOciOsmanagementSoftwareSourceAssociatedManagedInstances</a>

---



