# `dataOciLicenseManagerProductLicenseConsumers` Submodule <a name="`dataOciLicenseManagerProductLicenseConsumers` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLicenseManagerProductLicenseConsumers <a name="DataOciLicenseManagerProductLicenseConsumers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license_consumers oci_license_manager_product_license_consumers}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocilicensemanagerproductlicenseconsumers"

dataocilicensemanagerproductlicenseconsumers.NewDataOciLicenseManagerProductLicenseConsumers(scope Construct, id *string, config DataOciLicenseManagerProductLicenseConsumersConfig) DataOciLicenseManagerProductLicenseConsumers
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig">DataOciLicenseManagerProductLicenseConsumersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig">DataOciLicenseManagerProductLicenseConsumersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.resetIsCompartmentIdInSubtree">ResetIsCompartmentIdInSubtree</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.resetId"></a>

```go
func ResetId()
```

##### `ResetIsCompartmentIdInSubtree` <a name="ResetIsCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.resetIsCompartmentIdInSubtree"></a>

```go
func ResetIsCompartmentIdInSubtree()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLicenseManagerProductLicenseConsumers resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocilicensemanagerproductlicenseconsumers"

dataocilicensemanagerproductlicenseconsumers.DataOciLicenseManagerProductLicenseConsumers_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocilicensemanagerproductlicenseconsumers"

dataocilicensemanagerproductlicenseconsumers.DataOciLicenseManagerProductLicenseConsumers_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocilicensemanagerproductlicenseconsumers"

dataocilicensemanagerproductlicenseconsumers.DataOciLicenseManagerProductLicenseConsumers_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocilicensemanagerproductlicenseconsumers"

dataocilicensemanagerproductlicenseconsumers.DataOciLicenseManagerProductLicenseConsumers_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciLicenseManagerProductLicenseConsumers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciLicenseManagerProductLicenseConsumers to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciLicenseManagerProductLicenseConsumers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license_consumers#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLicenseManagerProductLicenseConsumers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList">DataOciLicenseManagerProductLicenseConsumersItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.isCompartmentIdInSubtreeInput">IsCompartmentIdInSubtreeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.productLicenseIdInput">ProductLicenseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.isCompartmentIdInSubtree">IsCompartmentIdInSubtree</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.productLicenseId">ProductLicenseId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.items"></a>

```go
func Items() DataOciLicenseManagerProductLicenseConsumersItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList">DataOciLicenseManagerProductLicenseConsumersItemsList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsCompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="IsCompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.isCompartmentIdInSubtreeInput"></a>

```go
func IsCompartmentIdInSubtreeInput() interface{}
```

- *Type:* interface{}

---

##### `ProductLicenseIdInput`<sup>Optional</sup> <a name="ProductLicenseIdInput" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.productLicenseIdInput"></a>

```go
func ProductLicenseIdInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsCompartmentIdInSubtree`<sup>Required</sup> <a name="IsCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.isCompartmentIdInSubtree"></a>

```go
func IsCompartmentIdInSubtree() interface{}
```

- *Type:* interface{}

---

##### `ProductLicenseId`<sup>Required</sup> <a name="ProductLicenseId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.productLicenseId"></a>

```go
func ProductLicenseId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLicenseManagerProductLicenseConsumersConfig <a name="DataOciLicenseManagerProductLicenseConsumersConfig" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocilicensemanagerproductlicenseconsumers"

&dataocilicensemanagerproductlicenseconsumers.DataOciLicenseManagerProductLicenseConsumersConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	ProductLicenseId: *string,
	Id: *string,
	IsCompartmentIdInSubtree: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license_consumers#compartment_id DataOciLicenseManagerProductLicenseConsumers#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.productLicenseId">ProductLicenseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license_consumers#product_license_id DataOciLicenseManagerProductLicenseConsumers#product_license_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license_consumers#id DataOciLicenseManagerProductLicenseConsumers#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.isCompartmentIdInSubtree">IsCompartmentIdInSubtree</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license_consumers#is_compartment_id_in_subtree DataOciLicenseManagerProductLicenseConsumers#is_compartment_id_in_subtree}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license_consumers#compartment_id DataOciLicenseManagerProductLicenseConsumers#compartment_id}.

---

##### `ProductLicenseId`<sup>Required</sup> <a name="ProductLicenseId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.productLicenseId"></a>

```go
ProductLicenseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license_consumers#product_license_id DataOciLicenseManagerProductLicenseConsumers#product_license_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license_consumers#id DataOciLicenseManagerProductLicenseConsumers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsCompartmentIdInSubtree`<sup>Optional</sup> <a name="IsCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.isCompartmentIdInSubtree"></a>

```go
IsCompartmentIdInSubtree interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license_consumers#is_compartment_id_in_subtree DataOciLicenseManagerProductLicenseConsumers#is_compartment_id_in_subtree}.

---

### DataOciLicenseManagerProductLicenseConsumersItems <a name="DataOciLicenseManagerProductLicenseConsumersItems" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocilicensemanagerproductlicenseconsumers"

&dataocilicensemanagerproductlicenseconsumers.DataOciLicenseManagerProductLicenseConsumersItems {

}
```


### DataOciLicenseManagerProductLicenseConsumersItemsMissingProducts <a name="DataOciLicenseManagerProductLicenseConsumersItemsMissingProducts" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProducts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProducts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocilicensemanagerproductlicenseconsumers"

&dataocilicensemanagerproductlicenseconsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProducts {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLicenseManagerProductLicenseConsumersItemsList <a name="DataOciLicenseManagerProductLicenseConsumersItemsList" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocilicensemanagerproductlicenseconsumers"

dataocilicensemanagerproductlicenseconsumers.NewDataOciLicenseManagerProductLicenseConsumersItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciLicenseManagerProductLicenseConsumersItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.get"></a>

```go
func Get(index *f64) DataOciLicenseManagerProductLicenseConsumersItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList <a name="DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocilicensemanagerproductlicenseconsumers"

dataocilicensemanagerproductlicenseconsumers.NewDataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.get"></a>

```go
func Get(index *f64) DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference <a name="DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocilicensemanagerproductlicenseconsumers"

dataocilicensemanagerproductlicenseconsumers.NewDataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProducts">DataOciLicenseManagerProductLicenseConsumersItemsMissingProducts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `Count`<sup>Required</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciLicenseManagerProductLicenseConsumersItemsMissingProducts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProducts">DataOciLicenseManagerProductLicenseConsumersItemsMissingProducts</a>

---


### DataOciLicenseManagerProductLicenseConsumersItemsOutputReference <a name="DataOciLicenseManagerProductLicenseConsumersItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocilicensemanagerproductlicenseconsumers"

dataocilicensemanagerproductlicenseconsumers.NewDataOciLicenseManagerProductLicenseConsumersItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciLicenseManagerProductLicenseConsumersItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.areAllOptionsAvailable">AreAllOptionsAvailable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.isBaseLicenseAvailable">IsBaseLicenseAvailable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.licenseUnitsConsumed">LicenseUnitsConsumed</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.licenseUnitType">LicenseUnitType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.missingProducts">MissingProducts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList">DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.productName">ProductName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.resourceCompartmentId">ResourceCompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.resourceCompartmentName">ResourceCompartmentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.resourceName">ResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.resourceUnitCount">ResourceUnitCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.resourceUnitType">ResourceUnitType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItems">DataOciLicenseManagerProductLicenseConsumersItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AreAllOptionsAvailable`<sup>Required</sup> <a name="AreAllOptionsAvailable" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.areAllOptionsAvailable"></a>

```go
func AreAllOptionsAvailable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsBaseLicenseAvailable`<sup>Required</sup> <a name="IsBaseLicenseAvailable" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.isBaseLicenseAvailable"></a>

```go
func IsBaseLicenseAvailable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LicenseUnitsConsumed`<sup>Required</sup> <a name="LicenseUnitsConsumed" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.licenseUnitsConsumed"></a>

```go
func LicenseUnitsConsumed() *f64
```

- *Type:* *f64

---

##### `LicenseUnitType`<sup>Required</sup> <a name="LicenseUnitType" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.licenseUnitType"></a>

```go
func LicenseUnitType() *string
```

- *Type:* *string

---

##### `MissingProducts`<sup>Required</sup> <a name="MissingProducts" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.missingProducts"></a>

```go
func MissingProducts() DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList">DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList</a>

---

##### `ProductName`<sup>Required</sup> <a name="ProductName" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.productName"></a>

```go
func ProductName() *string
```

- *Type:* *string

---

##### `ResourceCompartmentId`<sup>Required</sup> <a name="ResourceCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.resourceCompartmentId"></a>

```go
func ResourceCompartmentId() *string
```

- *Type:* *string

---

##### `ResourceCompartmentName`<sup>Required</sup> <a name="ResourceCompartmentName" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.resourceCompartmentName"></a>

```go
func ResourceCompartmentName() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.resourceName"></a>

```go
func ResourceName() *string
```

- *Type:* *string

---

##### `ResourceUnitCount`<sup>Required</sup> <a name="ResourceUnitCount" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.resourceUnitCount"></a>

```go
func ResourceUnitCount() *f64
```

- *Type:* *f64

---

##### `ResourceUnitType`<sup>Required</sup> <a name="ResourceUnitType" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.resourceUnitType"></a>

```go
func ResourceUnitType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciLicenseManagerProductLicenseConsumersItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItems">DataOciLicenseManagerProductLicenseConsumersItems</a>

---



