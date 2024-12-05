# `dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo` Submodule <a name="`dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo <a name="DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_encryption_key_info oci_log_analytics_namespace_storage_encryption_key_info}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespacestorageencryptionkeyinfo"

dataociloganalyticsnamespacestorageencryptionkeyinfo.NewDataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo(scope Construct, id *string, config DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig) DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig">DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig">DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespacestorageencryptionkeyinfo"

dataociloganalyticsnamespacestorageencryptionkeyinfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespacestorageencryptionkeyinfo"

dataociloganalyticsnamespacestorageencryptionkeyinfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespacestorageencryptionkeyinfo"

dataociloganalyticsnamespacestorageencryptionkeyinfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespacestorageencryptionkeyinfo"

dataociloganalyticsnamespacestorageencryptionkeyinfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_encryption_key_info#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList">DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.items"></a>

```go
func Items() DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList">DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig <a name="DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespacestorageencryptionkeyinfo"

&dataociloganalyticsnamespacestorageencryptionkeyinfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Namespace: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_encryption_key_info#namespace DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_encryption_key_info#id DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_encryption_key_info#namespace DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo#namespace}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_encryption_key_info#id DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItems <a name="DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItems" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespacestorageencryptionkeyinfo"

&dataociloganalyticsnamespacestorageencryptionkeyinfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList <a name="DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespacestorageencryptionkeyinfo"

dataociloganalyticsnamespacestorageencryptionkeyinfo.NewDataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.get"></a>

```go
func Get(index *f64) DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference <a name="DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespacestorageencryptionkeyinfo"

dataociloganalyticsnamespacestorageencryptionkeyinfo.NewDataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.property.keyId">KeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.property.keySource">KeySource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.property.keyType">KeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItems">DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.property.keyId"></a>

```go
func KeyId() *string
```

- *Type:* *string

---

##### `KeySource`<sup>Required</sup> <a name="KeySource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.property.keySource"></a>

```go
func KeySource() *string
```

- *Type:* *string

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.property.keyType"></a>

```go
func KeyType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItems">DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItems</a>

---



