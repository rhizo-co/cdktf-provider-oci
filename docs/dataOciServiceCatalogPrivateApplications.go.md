# `dataOciServiceCatalogPrivateApplications` Submodule <a name="`dataOciServiceCatalogPrivateApplications` Submodule" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciServiceCatalogPrivateApplications <a name="DataOciServiceCatalogPrivateApplications" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications oci_service_catalog_private_applications}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicecatalogprivateapplications"

dataociservicecatalogprivateapplications.NewDataOciServiceCatalogPrivateApplications(scope Construct, id *string, config DataOciServiceCatalogPrivateApplicationsConfig) DataOciServiceCatalogPrivateApplications
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig">DataOciServiceCatalogPrivateApplicationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig">DataOciServiceCatalogPrivateApplicationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.resetPrivateApplicationId">ResetPrivateApplicationId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.resetId"></a>

```go
func ResetId()
```

##### `ResetPrivateApplicationId` <a name="ResetPrivateApplicationId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.resetPrivateApplicationId"></a>

```go
func ResetPrivateApplicationId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciServiceCatalogPrivateApplications resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicecatalogprivateapplications"

dataociservicecatalogprivateapplications.DataOciServiceCatalogPrivateApplications_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicecatalogprivateapplications"

dataociservicecatalogprivateapplications.DataOciServiceCatalogPrivateApplications_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicecatalogprivateapplications"

dataociservicecatalogprivateapplications.DataOciServiceCatalogPrivateApplications_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicecatalogprivateapplications"

dataociservicecatalogprivateapplications.DataOciServiceCatalogPrivateApplications_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciServiceCatalogPrivateApplications resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciServiceCatalogPrivateApplications to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciServiceCatalogPrivateApplications that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciServiceCatalogPrivateApplications to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList">DataOciServiceCatalogPrivateApplicationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.privateApplicationCollection">PrivateApplicationCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.privateApplicationIdInput">PrivateApplicationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.privateApplicationId">PrivateApplicationId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.filter"></a>

```go
func Filter() DataOciServiceCatalogPrivateApplicationsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList">DataOciServiceCatalogPrivateApplicationsFilterList</a>

---

##### `PrivateApplicationCollection`<sup>Required</sup> <a name="PrivateApplicationCollection" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.privateApplicationCollection"></a>

```go
func PrivateApplicationCollection() DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PrivateApplicationIdInput`<sup>Optional</sup> <a name="PrivateApplicationIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.privateApplicationIdInput"></a>

```go
func PrivateApplicationIdInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PrivateApplicationId`<sup>Required</sup> <a name="PrivateApplicationId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.privateApplicationId"></a>

```go
func PrivateApplicationId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciServiceCatalogPrivateApplicationsConfig <a name="DataOciServiceCatalogPrivateApplicationsConfig" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicecatalogprivateapplications"

&dataociservicecatalogprivateapplications.DataOciServiceCatalogPrivateApplicationsConfig {
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
	PrivateApplicationId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#compartment_id DataOciServiceCatalogPrivateApplications#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#display_name DataOciServiceCatalogPrivateApplications#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#id DataOciServiceCatalogPrivateApplications#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.privateApplicationId">PrivateApplicationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#private_application_id DataOciServiceCatalogPrivateApplications#private_application_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#compartment_id DataOciServiceCatalogPrivateApplications#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#display_name DataOciServiceCatalogPrivateApplications#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#filter DataOciServiceCatalogPrivateApplications#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#id DataOciServiceCatalogPrivateApplications#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrivateApplicationId`<sup>Optional</sup> <a name="PrivateApplicationId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.privateApplicationId"></a>

```go
PrivateApplicationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#private_application_id DataOciServiceCatalogPrivateApplications#private_application_id}.

---

### DataOciServiceCatalogPrivateApplicationsFilter <a name="DataOciServiceCatalogPrivateApplicationsFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicecatalogprivateapplications"

&dataociservicecatalogprivateapplications.DataOciServiceCatalogPrivateApplicationsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#name DataOciServiceCatalogPrivateApplications#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#values DataOciServiceCatalogPrivateApplications#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#regex DataOciServiceCatalogPrivateApplications#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#name DataOciServiceCatalogPrivateApplications#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#values DataOciServiceCatalogPrivateApplications#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#regex DataOciServiceCatalogPrivateApplications#regex}.

---

### DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollection <a name="DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollection" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicecatalogprivateapplications"

&dataociservicecatalogprivateapplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollection {

}
```


### DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItems <a name="DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicecatalogprivateapplications"

&dataociservicecatalogprivateapplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItems {

}
```


### DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogo <a name="DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogo" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogo.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicecatalogprivateapplications"

&dataociservicecatalogprivateapplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogo {

}
```


### DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetails <a name="DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetails" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicecatalogprivateapplications"

&dataociservicecatalogprivateapplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetails {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciServiceCatalogPrivateApplicationsFilterList <a name="DataOciServiceCatalogPrivateApplicationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicecatalogprivateapplications"

dataociservicecatalogprivateapplications.NewDataOciServiceCatalogPrivateApplicationsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciServiceCatalogPrivateApplicationsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.get"></a>

```go
func Get(index *f64) DataOciServiceCatalogPrivateApplicationsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciServiceCatalogPrivateApplicationsFilterOutputReference <a name="DataOciServiceCatalogPrivateApplicationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicecatalogprivateapplications"

dataociservicecatalogprivateapplications.NewDataOciServiceCatalogPrivateApplicationsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciServiceCatalogPrivateApplicationsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList <a name="DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicecatalogprivateapplications"

dataociservicecatalogprivateapplications.NewDataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList <a name="DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicecatalogprivateapplications"

dataociservicecatalogprivateapplications.NewDataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.get"></a>

```go
func Get(index *f64) DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference <a name="DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicecatalogprivateapplications"

dataociservicecatalogprivateapplications.NewDataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.property.contentUrl">ContentUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.property.mimeType">MimeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogo">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentUrl`<sup>Required</sup> <a name="ContentUrl" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.property.contentUrl"></a>

```go
func ContentUrl() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `MimeType`<sup>Required</sup> <a name="MimeType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.property.mimeType"></a>

```go
func MimeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogo">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogo</a>

---


### DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference <a name="DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicecatalogprivateapplications"

dataociservicecatalogprivateapplications.NewDataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.logo">Logo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.logoFileBase64Encoded">LogoFileBase64Encoded</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.longDescription">LongDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.packageDetails">PackageDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.packageType">PackageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.shortDescription">ShortDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItems">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Logo`<sup>Required</sup> <a name="Logo" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.logo"></a>

```go
func Logo() DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList</a>

---

##### `LogoFileBase64Encoded`<sup>Required</sup> <a name="LogoFileBase64Encoded" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.logoFileBase64Encoded"></a>

```go
func LogoFileBase64Encoded() *string
```

- *Type:* *string

---

##### `LongDescription`<sup>Required</sup> <a name="LongDescription" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.longDescription"></a>

```go
func LongDescription() *string
```

- *Type:* *string

---

##### `PackageDetails`<sup>Required</sup> <a name="PackageDetails" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.packageDetails"></a>

```go
func PackageDetails() DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList</a>

---

##### `PackageType`<sup>Required</sup> <a name="PackageType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.packageType"></a>

```go
func PackageType() *string
```

- *Type:* *string

---

##### `ShortDescription`<sup>Required</sup> <a name="ShortDescription" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.shortDescription"></a>

```go
func ShortDescription() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItems">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItems</a>

---


### DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList <a name="DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicecatalogprivateapplications"

dataociservicecatalogprivateapplications.NewDataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.get"></a>

```go
func Get(index *f64) DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference <a name="DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicecatalogprivateapplications"

dataociservicecatalogprivateapplications.NewDataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.property.packageType">PackageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.property.zipFileBase64Encoded">ZipFileBase64Encoded</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetails">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PackageType`<sup>Required</sup> <a name="PackageType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.property.packageType"></a>

```go
func PackageType() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `ZipFileBase64Encoded`<sup>Required</sup> <a name="ZipFileBase64Encoded" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.property.zipFileBase64Encoded"></a>

```go
func ZipFileBase64Encoded() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetails">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetails</a>

---


### DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList <a name="DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicecatalogprivateapplications"

dataociservicecatalogprivateapplications.NewDataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.get"></a>

```go
func Get(index *f64) DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference <a name="DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicecatalogprivateapplications"

dataociservicecatalogprivateapplications.NewDataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollection">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.property.items"></a>

```go
func Items() DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollection">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollection</a>

---



