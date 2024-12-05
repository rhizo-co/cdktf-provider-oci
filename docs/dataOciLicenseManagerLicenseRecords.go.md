# `dataOciLicenseManagerLicenseRecords` Submodule <a name="`dataOciLicenseManagerLicenseRecords` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLicenseManagerLicenseRecords <a name="DataOciLicenseManagerLicenseRecords" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_license_records oci_license_manager_license_records}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocilicensemanagerlicenserecords"

dataocilicensemanagerlicenserecords.NewDataOciLicenseManagerLicenseRecords(scope Construct, id *string, config DataOciLicenseManagerLicenseRecordsConfig) DataOciLicenseManagerLicenseRecords
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsConfig">DataOciLicenseManagerLicenseRecordsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsConfig">DataOciLicenseManagerLicenseRecordsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLicenseManagerLicenseRecords resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocilicensemanagerlicenserecords"

dataocilicensemanagerlicenserecords.DataOciLicenseManagerLicenseRecords_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocilicensemanagerlicenserecords"

dataocilicensemanagerlicenserecords.DataOciLicenseManagerLicenseRecords_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocilicensemanagerlicenserecords"

dataocilicensemanagerlicenserecords.DataOciLicenseManagerLicenseRecords_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocilicensemanagerlicenserecords"

dataocilicensemanagerlicenserecords.DataOciLicenseManagerLicenseRecords_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciLicenseManagerLicenseRecords resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciLicenseManagerLicenseRecords to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciLicenseManagerLicenseRecords that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_license_records#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLicenseManagerLicenseRecords to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterList">DataOciLicenseManagerLicenseRecordsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.property.licenseRecordCollection">LicenseRecordCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionList">DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.property.productLicenseIdInput">ProductLicenseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.property.productLicenseId">ProductLicenseId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.property.filter"></a>

```go
func Filter() DataOciLicenseManagerLicenseRecordsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterList">DataOciLicenseManagerLicenseRecordsFilterList</a>

---

##### `LicenseRecordCollection`<sup>Required</sup> <a name="LicenseRecordCollection" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.property.licenseRecordCollection"></a>

```go
func LicenseRecordCollection() DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionList">DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProductLicenseIdInput`<sup>Optional</sup> <a name="ProductLicenseIdInput" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.property.productLicenseIdInput"></a>

```go
func ProductLicenseIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProductLicenseId`<sup>Required</sup> <a name="ProductLicenseId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.property.productLicenseId"></a>

```go
func ProductLicenseId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecords.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLicenseManagerLicenseRecordsConfig <a name="DataOciLicenseManagerLicenseRecordsConfig" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocilicensemanagerlicenserecords"

&dataocilicensemanagerlicenserecords.DataOciLicenseManagerLicenseRecordsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ProductLicenseId: *string,
	Filter: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsConfig.property.productLicenseId">ProductLicenseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_license_records#product_license_id DataOciLicenseManagerLicenseRecords#product_license_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_license_records#id DataOciLicenseManagerLicenseRecords#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ProductLicenseId`<sup>Required</sup> <a name="ProductLicenseId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsConfig.property.productLicenseId"></a>

```go
ProductLicenseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_license_records#product_license_id DataOciLicenseManagerLicenseRecords#product_license_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_license_records#filter DataOciLicenseManagerLicenseRecords#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_license_records#id DataOciLicenseManagerLicenseRecords#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciLicenseManagerLicenseRecordsFilter <a name="DataOciLicenseManagerLicenseRecordsFilter" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocilicensemanagerlicenserecords"

&dataocilicensemanagerlicenserecords.DataOciLicenseManagerLicenseRecordsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_license_records#name DataOciLicenseManagerLicenseRecords#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_license_records#values DataOciLicenseManagerLicenseRecords#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_license_records#regex DataOciLicenseManagerLicenseRecords#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_license_records#name DataOciLicenseManagerLicenseRecords#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_license_records#values DataOciLicenseManagerLicenseRecords#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_license_records#regex DataOciLicenseManagerLicenseRecords#regex}.

---

### DataOciLicenseManagerLicenseRecordsLicenseRecordCollection <a name="DataOciLicenseManagerLicenseRecordsLicenseRecordCollection" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocilicensemanagerlicenserecords"

&dataocilicensemanagerlicenserecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollection {

}
```


### DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItems <a name="DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocilicensemanagerlicenserecords"

&dataocilicensemanagerlicenserecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLicenseManagerLicenseRecordsFilterList <a name="DataOciLicenseManagerLicenseRecordsFilterList" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocilicensemanagerlicenserecords"

dataocilicensemanagerlicenserecords.NewDataOciLicenseManagerLicenseRecordsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciLicenseManagerLicenseRecordsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterList.get"></a>

```go
func Get(index *f64) DataOciLicenseManagerLicenseRecordsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciLicenseManagerLicenseRecordsFilterOutputReference <a name="DataOciLicenseManagerLicenseRecordsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocilicensemanagerlicenserecords"

dataocilicensemanagerlicenserecords.NewDataOciLicenseManagerLicenseRecordsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciLicenseManagerLicenseRecordsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsList <a name="DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocilicensemanagerlicenserecords"

dataocilicensemanagerlicenserecords.NewDataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference <a name="DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocilicensemanagerlicenserecords"

dataocilicensemanagerlicenserecords.NewDataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.property.expirationDate">ExpirationDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.property.isPerpetual">IsPerpetual</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.property.isUnlimited">IsUnlimited</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.property.licenseCount">LicenseCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.property.licenseUnit">LicenseUnit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.property.productId">ProductId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.property.productLicense">ProductLicense</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.property.productLicenseId">ProductLicenseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.property.supportEndDate">SupportEndDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItems">DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExpirationDate`<sup>Required</sup> <a name="ExpirationDate" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.property.expirationDate"></a>

```go
func ExpirationDate() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsPerpetual`<sup>Required</sup> <a name="IsPerpetual" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.property.isPerpetual"></a>

```go
func IsPerpetual() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsUnlimited`<sup>Required</sup> <a name="IsUnlimited" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.property.isUnlimited"></a>

```go
func IsUnlimited() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LicenseCount`<sup>Required</sup> <a name="LicenseCount" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.property.licenseCount"></a>

```go
func LicenseCount() *f64
```

- *Type:* *f64

---

##### `LicenseUnit`<sup>Required</sup> <a name="LicenseUnit" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.property.licenseUnit"></a>

```go
func LicenseUnit() *string
```

- *Type:* *string

---

##### `ProductId`<sup>Required</sup> <a name="ProductId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.property.productId"></a>

```go
func ProductId() *string
```

- *Type:* *string

---

##### `ProductLicense`<sup>Required</sup> <a name="ProductLicense" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.property.productLicense"></a>

```go
func ProductLicense() *string
```

- *Type:* *string

---

##### `ProductLicenseId`<sup>Required</sup> <a name="ProductLicenseId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.property.productLicenseId"></a>

```go
func ProductLicenseId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SupportEndDate`<sup>Required</sup> <a name="SupportEndDate" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.property.supportEndDate"></a>

```go
func SupportEndDate() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItems">DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItems</a>

---


### DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionList <a name="DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionList" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocilicensemanagerlicenserecords"

dataocilicensemanagerlicenserecords.NewDataOciLicenseManagerLicenseRecordsLicenseRecordCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionList.get"></a>

```go
func Get(index *f64) DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference <a name="DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocilicensemanagerlicenserecords"

dataocilicensemanagerlicenserecords.NewDataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsList">DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollection">DataOciLicenseManagerLicenseRecordsLicenseRecordCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference.property.items"></a>

```go
func Items() DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsList">DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciLicenseManagerLicenseRecordsLicenseRecordCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseRecords.DataOciLicenseManagerLicenseRecordsLicenseRecordCollection">DataOciLicenseManagerLicenseRecordsLicenseRecordCollection</a>

---



