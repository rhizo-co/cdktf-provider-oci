# `dataOciIdentityAllowedDomainLicenseTypes` Submodule <a name="`dataOciIdentityAllowedDomainLicenseTypes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityAllowedDomainLicenseTypes <a name="DataOciIdentityAllowedDomainLicenseTypes" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_allowed_domain_license_types oci_identity_allowed_domain_license_types}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentityalloweddomainlicensetypes"

dataociidentityalloweddomainlicensetypes.NewDataOciIdentityAllowedDomainLicenseTypes(scope Construct, id *string, config DataOciIdentityAllowedDomainLicenseTypesConfig) DataOciIdentityAllowedDomainLicenseTypes
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig">DataOciIdentityAllowedDomainLicenseTypesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig">DataOciIdentityAllowedDomainLicenseTypesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.resetCurrentLicenseTypeName">ResetCurrentLicenseTypeName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCurrentLicenseTypeName` <a name="ResetCurrentLicenseTypeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.resetCurrentLicenseTypeName"></a>

```go
func ResetCurrentLicenseTypeName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityAllowedDomainLicenseTypes resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentityalloweddomainlicensetypes"

dataociidentityalloweddomainlicensetypes.DataOciIdentityAllowedDomainLicenseTypes_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentityalloweddomainlicensetypes"

dataociidentityalloweddomainlicensetypes.DataOciIdentityAllowedDomainLicenseTypes_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentityalloweddomainlicensetypes"

dataociidentityalloweddomainlicensetypes.DataOciIdentityAllowedDomainLicenseTypes_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentityalloweddomainlicensetypes"

dataociidentityalloweddomainlicensetypes.DataOciIdentityAllowedDomainLicenseTypes_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciIdentityAllowedDomainLicenseTypes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciIdentityAllowedDomainLicenseTypes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciIdentityAllowedDomainLicenseTypes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_allowed_domain_license_types#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityAllowedDomainLicenseTypes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.allowedDomainLicenseTypes">AllowedDomainLicenseTypes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList">DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList">DataOciIdentityAllowedDomainLicenseTypesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.currentLicenseTypeNameInput">CurrentLicenseTypeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.currentLicenseTypeName">CurrentLicenseTypeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AllowedDomainLicenseTypes`<sup>Required</sup> <a name="AllowedDomainLicenseTypes" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.allowedDomainLicenseTypes"></a>

```go
func AllowedDomainLicenseTypes() DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList">DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.filter"></a>

```go
func Filter() DataOciIdentityAllowedDomainLicenseTypesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList">DataOciIdentityAllowedDomainLicenseTypesFilterList</a>

---

##### `CurrentLicenseTypeNameInput`<sup>Optional</sup> <a name="CurrentLicenseTypeNameInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.currentLicenseTypeNameInput"></a>

```go
func CurrentLicenseTypeNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `CurrentLicenseTypeName`<sup>Required</sup> <a name="CurrentLicenseTypeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.currentLicenseTypeName"></a>

```go
func CurrentLicenseTypeName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypes <a name="DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypes" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypes.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentityalloweddomainlicensetypes"

&dataociidentityalloweddomainlicensetypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypes {

}
```


### DataOciIdentityAllowedDomainLicenseTypesConfig <a name="DataOciIdentityAllowedDomainLicenseTypesConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentityalloweddomainlicensetypes"

&dataociidentityalloweddomainlicensetypes.DataOciIdentityAllowedDomainLicenseTypesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CurrentLicenseTypeName: *string,
	Filter: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.currentLicenseTypeName">CurrentLicenseTypeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_allowed_domain_license_types#current_license_type_name DataOciIdentityAllowedDomainLicenseTypes#current_license_type_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_allowed_domain_license_types#id DataOciIdentityAllowedDomainLicenseTypes#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CurrentLicenseTypeName`<sup>Optional</sup> <a name="CurrentLicenseTypeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.currentLicenseTypeName"></a>

```go
CurrentLicenseTypeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_allowed_domain_license_types#current_license_type_name DataOciIdentityAllowedDomainLicenseTypes#current_license_type_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_allowed_domain_license_types#filter DataOciIdentityAllowedDomainLicenseTypes#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_allowed_domain_license_types#id DataOciIdentityAllowedDomainLicenseTypes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciIdentityAllowedDomainLicenseTypesFilter <a name="DataOciIdentityAllowedDomainLicenseTypesFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentityalloweddomainlicensetypes"

&dataociidentityalloweddomainlicensetypes.DataOciIdentityAllowedDomainLicenseTypesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_allowed_domain_license_types#name DataOciIdentityAllowedDomainLicenseTypes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_allowed_domain_license_types#values DataOciIdentityAllowedDomainLicenseTypes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_allowed_domain_license_types#regex DataOciIdentityAllowedDomainLicenseTypes#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_allowed_domain_license_types#name DataOciIdentityAllowedDomainLicenseTypes#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_allowed_domain_license_types#values DataOciIdentityAllowedDomainLicenseTypes#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_allowed_domain_license_types#regex DataOciIdentityAllowedDomainLicenseTypes#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList <a name="DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentityalloweddomainlicensetypes"

dataociidentityalloweddomainlicensetypes.NewDataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.get"></a>

```go
func Get(index *f64) DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference <a name="DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentityalloweddomainlicensetypes"

dataociidentityalloweddomainlicensetypes.NewDataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.property.licenseType">LicenseType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypes">DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `LicenseType`<sup>Required</sup> <a name="LicenseType" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.property.licenseType"></a>

```go
func LicenseType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypes">DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypes</a>

---


### DataOciIdentityAllowedDomainLicenseTypesFilterList <a name="DataOciIdentityAllowedDomainLicenseTypesFilterList" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentityalloweddomainlicensetypes"

dataociidentityalloweddomainlicensetypes.NewDataOciIdentityAllowedDomainLicenseTypesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityAllowedDomainLicenseTypesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.get"></a>

```go
func Get(index *f64) DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference <a name="DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentityalloweddomainlicensetypes"

dataociidentityalloweddomainlicensetypes.NewDataOciIdentityAllowedDomainLicenseTypesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



