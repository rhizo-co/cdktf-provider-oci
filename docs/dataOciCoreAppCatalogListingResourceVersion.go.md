# `dataOciCoreAppCatalogListingResourceVersion` Submodule <a name="`dataOciCoreAppCatalogListingResourceVersion` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreAppCatalogListingResourceVersion <a name="DataOciCoreAppCatalogListingResourceVersion" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_version oci_core_app_catalog_listing_resource_version}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreappcataloglistingresourceversion"

dataocicoreappcataloglistingresourceversion.NewDataOciCoreAppCatalogListingResourceVersion(scope Construct, id *string, config DataOciCoreAppCatalogListingResourceVersionConfig) DataOciCoreAppCatalogListingResourceVersion
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersionConfig">DataOciCoreAppCatalogListingResourceVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersionConfig">DataOciCoreAppCatalogListingResourceVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreAppCatalogListingResourceVersion resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreappcataloglistingresourceversion"

dataocicoreappcataloglistingresourceversion.DataOciCoreAppCatalogListingResourceVersion_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreappcataloglistingresourceversion"

dataocicoreappcataloglistingresourceversion.DataOciCoreAppCatalogListingResourceVersion_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreappcataloglistingresourceversion"

dataocicoreappcataloglistingresourceversion.DataOciCoreAppCatalogListingResourceVersion_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreappcataloglistingresourceversion"

dataocicoreappcataloglistingresourceversion.DataOciCoreAppCatalogListingResourceVersion_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciCoreAppCatalogListingResourceVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciCoreAppCatalogListingResourceVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciCoreAppCatalogListingResourceVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreAppCatalogListingResourceVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.accessiblePorts">AccessiblePorts</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.allowedActions">AllowedActions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.availableRegions">AvailableRegions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.compatibleShapes">CompatibleShapes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.listingResourceId">ListingResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.listingResourceVersion">ListingResourceVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.timePublished">TimePublished</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.listingIdInput">ListingIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.resourceVersionInput">ResourceVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.listingId">ListingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.resourceVersion">ResourceVersion</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AccessiblePorts`<sup>Required</sup> <a name="AccessiblePorts" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.accessiblePorts"></a>

```go
func AccessiblePorts() *[]*f64
```

- *Type:* *[]*f64

---

##### `AllowedActions`<sup>Required</sup> <a name="AllowedActions" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.allowedActions"></a>

```go
func AllowedActions() *[]*string
```

- *Type:* *[]*string

---

##### `AvailableRegions`<sup>Required</sup> <a name="AvailableRegions" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.availableRegions"></a>

```go
func AvailableRegions() *[]*string
```

- *Type:* *[]*string

---

##### `CompatibleShapes`<sup>Required</sup> <a name="CompatibleShapes" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.compatibleShapes"></a>

```go
func CompatibleShapes() *[]*string
```

- *Type:* *[]*string

---

##### `ListingResourceId`<sup>Required</sup> <a name="ListingResourceId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.listingResourceId"></a>

```go
func ListingResourceId() *string
```

- *Type:* *string

---

##### `ListingResourceVersion`<sup>Required</sup> <a name="ListingResourceVersion" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.listingResourceVersion"></a>

```go
func ListingResourceVersion() *string
```

- *Type:* *string

---

##### `TimePublished`<sup>Required</sup> <a name="TimePublished" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.timePublished"></a>

```go
func TimePublished() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ListingIdInput`<sup>Optional</sup> <a name="ListingIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.listingIdInput"></a>

```go
func ListingIdInput() *string
```

- *Type:* *string

---

##### `ResourceVersionInput`<sup>Optional</sup> <a name="ResourceVersionInput" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.resourceVersionInput"></a>

```go
func ResourceVersionInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ListingId`<sup>Required</sup> <a name="ListingId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.listingId"></a>

```go
func ListingId() *string
```

- *Type:* *string

---

##### `ResourceVersion`<sup>Required</sup> <a name="ResourceVersion" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.resourceVersion"></a>

```go
func ResourceVersion() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersion.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreAppCatalogListingResourceVersionConfig <a name="DataOciCoreAppCatalogListingResourceVersionConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersionConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreappcataloglistingresourceversion"

&dataocicoreappcataloglistingresourceversion.DataOciCoreAppCatalogListingResourceVersionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ListingId: *string,
	ResourceVersion: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersionConfig.property.listingId">ListingId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_version#listing_id DataOciCoreAppCatalogListingResourceVersion#listing_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersionConfig.property.resourceVersion">ResourceVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_version#resource_version DataOciCoreAppCatalogListingResourceVersion#resource_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_version#id DataOciCoreAppCatalogListingResourceVersion#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ListingId`<sup>Required</sup> <a name="ListingId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersionConfig.property.listingId"></a>

```go
ListingId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_version#listing_id DataOciCoreAppCatalogListingResourceVersion#listing_id}.

---

##### `ResourceVersion`<sup>Required</sup> <a name="ResourceVersion" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersionConfig.property.resourceVersion"></a>

```go
ResourceVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_version#resource_version DataOciCoreAppCatalogListingResourceVersion#resource_version}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersion.DataOciCoreAppCatalogListingResourceVersionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_version#id DataOciCoreAppCatalogListingResourceVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---


