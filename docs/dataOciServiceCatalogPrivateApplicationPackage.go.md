# `dataOciServiceCatalogPrivateApplicationPackage` Submodule <a name="`dataOciServiceCatalogPrivateApplicationPackage` Submodule" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciServiceCatalogPrivateApplicationPackage <a name="DataOciServiceCatalogPrivateApplicationPackage" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_package oci_service_catalog_private_application_package}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicecatalogprivateapplicationpackage"

dataociservicecatalogprivateapplicationpackage.NewDataOciServiceCatalogPrivateApplicationPackage(scope Construct, id *string, config DataOciServiceCatalogPrivateApplicationPackageConfig) DataOciServiceCatalogPrivateApplicationPackage
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackageConfig">DataOciServiceCatalogPrivateApplicationPackageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackageConfig">DataOciServiceCatalogPrivateApplicationPackageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciServiceCatalogPrivateApplicationPackage resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicecatalogprivateapplicationpackage"

dataociservicecatalogprivateapplicationpackage.DataOciServiceCatalogPrivateApplicationPackage_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicecatalogprivateapplicationpackage"

dataociservicecatalogprivateapplicationpackage.DataOciServiceCatalogPrivateApplicationPackage_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicecatalogprivateapplicationpackage"

dataociservicecatalogprivateapplicationpackage.DataOciServiceCatalogPrivateApplicationPackage_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicecatalogprivateapplicationpackage"

dataociservicecatalogprivateapplicationpackage.DataOciServiceCatalogPrivateApplicationPackage_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciServiceCatalogPrivateApplicationPackage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciServiceCatalogPrivateApplicationPackage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciServiceCatalogPrivateApplicationPackage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_package#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciServiceCatalogPrivateApplicationPackage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.contentUrl">ContentUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.mimeType">MimeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.packageType">PackageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.privateApplicationId">PrivateApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.privateApplicationPackageIdInput">PrivateApplicationPackageIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.privateApplicationPackageId">PrivateApplicationPackageId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ContentUrl`<sup>Required</sup> <a name="ContentUrl" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.contentUrl"></a>

```go
func ContentUrl() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `MimeType`<sup>Required</sup> <a name="MimeType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.mimeType"></a>

```go
func MimeType() *string
```

- *Type:* *string

---

##### `PackageType`<sup>Required</sup> <a name="PackageType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.packageType"></a>

```go
func PackageType() *string
```

- *Type:* *string

---

##### `PrivateApplicationId`<sup>Required</sup> <a name="PrivateApplicationId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.privateApplicationId"></a>

```go
func PrivateApplicationId() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PrivateApplicationPackageIdInput`<sup>Optional</sup> <a name="PrivateApplicationPackageIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.privateApplicationPackageIdInput"></a>

```go
func PrivateApplicationPackageIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PrivateApplicationPackageId`<sup>Required</sup> <a name="PrivateApplicationPackageId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.privateApplicationPackageId"></a>

```go
func PrivateApplicationPackageId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackage.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciServiceCatalogPrivateApplicationPackageConfig <a name="DataOciServiceCatalogPrivateApplicationPackageConfig" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackageConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackageConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicecatalogprivateapplicationpackage"

&dataociservicecatalogprivateapplicationpackage.DataOciServiceCatalogPrivateApplicationPackageConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	PrivateApplicationPackageId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackageConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackageConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackageConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackageConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackageConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackageConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackageConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackageConfig.property.privateApplicationPackageId">PrivateApplicationPackageId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_package#private_application_package_id DataOciServiceCatalogPrivateApplicationPackage#private_application_package_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackageConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_package#id DataOciServiceCatalogPrivateApplicationPackage#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackageConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackageConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackageConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackageConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackageConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackageConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackageConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PrivateApplicationPackageId`<sup>Required</sup> <a name="PrivateApplicationPackageId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackageConfig.property.privateApplicationPackageId"></a>

```go
PrivateApplicationPackageId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_package#private_application_package_id DataOciServiceCatalogPrivateApplicationPackage#private_application_package_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackage.DataOciServiceCatalogPrivateApplicationPackageConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_package#id DataOciServiceCatalogPrivateApplicationPackage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---


