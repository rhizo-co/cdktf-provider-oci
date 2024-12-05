# `dataOciLicenseManagerProductLicense` Submodule <a name="`dataOciLicenseManagerProductLicense` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLicenseManagerProductLicense <a name="DataOciLicenseManagerProductLicense" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license oci_license_manager_product_license}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_license_manager_product_license.DataOciLicenseManagerProductLicense;

DataOciLicenseManagerProductLicense.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .productLicenseId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.Initializer.parameter.productLicenseId">productLicenseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license#product_license_id DataOciLicenseManagerProductLicense#product_license_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `productLicenseId`<sup>Required</sup> <a name="productLicenseId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.Initializer.parameter.productLicenseId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license#product_license_id DataOciLicenseManagerProductLicense#product_license_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLicenseManagerProductLicense resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_license_manager_product_license.DataOciLicenseManagerProductLicense;

DataOciLicenseManagerProductLicense.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_license_manager_product_license.DataOciLicenseManagerProductLicense;

DataOciLicenseManagerProductLicense.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_license_manager_product_license.DataOciLicenseManagerProductLicense;

DataOciLicenseManagerProductLicense.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_license_manager_product_license.DataOciLicenseManagerProductLicense;

DataOciLicenseManagerProductLicense.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciLicenseManagerProductLicense.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciLicenseManagerProductLicense resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciLicenseManagerProductLicense to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciLicenseManagerProductLicense that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLicenseManagerProductLicense to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.activeLicenseRecordCount">activeLicenseRecordCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.images">images</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesList">DataOciLicenseManagerProductLicenseImagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.isOverSubscribed">isOverSubscribed</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.isUnlimited">isUnlimited</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.isVendorOracle">isVendorOracle</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.licenseUnit">licenseUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.statusDescription">statusDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.totalActiveLicenseUnitCount">totalActiveLicenseUnitCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.totalLicenseRecordCount">totalLicenseRecordCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.totalLicenseUnitsConsumed">totalLicenseUnitsConsumed</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.vendorName">vendorName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.productLicenseIdInput">productLicenseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.productLicenseId">productLicenseId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `activeLicenseRecordCount`<sup>Required</sup> <a name="activeLicenseRecordCount" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.activeLicenseRecordCount"></a>

```java
public java.lang.Number getActiveLicenseRecordCount();
```

- *Type:* java.lang.Number

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `images`<sup>Required</sup> <a name="images" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.images"></a>

```java
public DataOciLicenseManagerProductLicenseImagesList getImages();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesList">DataOciLicenseManagerProductLicenseImagesList</a>

---

##### `isOverSubscribed`<sup>Required</sup> <a name="isOverSubscribed" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.isOverSubscribed"></a>

```java
public IResolvable getIsOverSubscribed();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isUnlimited`<sup>Required</sup> <a name="isUnlimited" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.isUnlimited"></a>

```java
public IResolvable getIsUnlimited();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isVendorOracle`<sup>Required</sup> <a name="isVendorOracle" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.isVendorOracle"></a>

```java
public IResolvable getIsVendorOracle();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `licenseUnit`<sup>Required</sup> <a name="licenseUnit" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.licenseUnit"></a>

```java
public java.lang.String getLicenseUnit();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `statusDescription`<sup>Required</sup> <a name="statusDescription" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.statusDescription"></a>

```java
public java.lang.String getStatusDescription();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `totalActiveLicenseUnitCount`<sup>Required</sup> <a name="totalActiveLicenseUnitCount" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.totalActiveLicenseUnitCount"></a>

```java
public java.lang.Number getTotalActiveLicenseUnitCount();
```

- *Type:* java.lang.Number

---

##### `totalLicenseRecordCount`<sup>Required</sup> <a name="totalLicenseRecordCount" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.totalLicenseRecordCount"></a>

```java
public java.lang.Number getTotalLicenseRecordCount();
```

- *Type:* java.lang.Number

---

##### `totalLicenseUnitsConsumed`<sup>Required</sup> <a name="totalLicenseUnitsConsumed" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.totalLicenseUnitsConsumed"></a>

```java
public java.lang.Number getTotalLicenseUnitsConsumed();
```

- *Type:* java.lang.Number

---

##### `vendorName`<sup>Required</sup> <a name="vendorName" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.vendorName"></a>

```java
public java.lang.String getVendorName();
```

- *Type:* java.lang.String

---

##### `productLicenseIdInput`<sup>Optional</sup> <a name="productLicenseIdInput" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.productLicenseIdInput"></a>

```java
public java.lang.String getProductLicenseIdInput();
```

- *Type:* java.lang.String

---

##### `productLicenseId`<sup>Required</sup> <a name="productLicenseId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.productLicenseId"></a>

```java
public java.lang.String getProductLicenseId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicense.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLicenseManagerProductLicenseConfig <a name="DataOciLicenseManagerProductLicenseConfig" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_license_manager_product_license.DataOciLicenseManagerProductLicenseConfig;

DataOciLicenseManagerProductLicenseConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .productLicenseId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseConfig.property.productLicenseId">productLicenseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license#product_license_id DataOciLicenseManagerProductLicense#product_license_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `productLicenseId`<sup>Required</sup> <a name="productLicenseId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseConfig.property.productLicenseId"></a>

```java
public java.lang.String getProductLicenseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license#product_license_id DataOciLicenseManagerProductLicense#product_license_id}.

---

### DataOciLicenseManagerProductLicenseImages <a name="DataOciLicenseManagerProductLicenseImages" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImages.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_license_manager_product_license.DataOciLicenseManagerProductLicenseImages;

DataOciLicenseManagerProductLicenseImages.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLicenseManagerProductLicenseImagesList <a name="DataOciLicenseManagerProductLicenseImagesList" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_license_manager_product_license.DataOciLicenseManagerProductLicenseImagesList;

new DataOciLicenseManagerProductLicenseImagesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesList.get"></a>

```java
public DataOciLicenseManagerProductLicenseImagesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciLicenseManagerProductLicenseImagesOutputReference <a name="DataOciLicenseManagerProductLicenseImagesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_license_manager_product_license.DataOciLicenseManagerProductLicenseImagesOutputReference;

new DataOciLicenseManagerProductLicenseImagesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.property.listingId">listingId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.property.listingName">listingName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.property.packageVersion">packageVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.property.publisher">publisher</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImages">DataOciLicenseManagerProductLicenseImages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `listingId`<sup>Required</sup> <a name="listingId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.property.listingId"></a>

```java
public java.lang.String getListingId();
```

- *Type:* java.lang.String

---

##### `listingName`<sup>Required</sup> <a name="listingName" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.property.listingName"></a>

```java
public java.lang.String getListingName();
```

- *Type:* java.lang.String

---

##### `packageVersion`<sup>Required</sup> <a name="packageVersion" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.property.packageVersion"></a>

```java
public java.lang.String getPackageVersion();
```

- *Type:* java.lang.String

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.property.publisher"></a>

```java
public java.lang.String getPublisher();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImagesOutputReference.property.internalValue"></a>

```java
public DataOciLicenseManagerProductLicenseImages getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicense.DataOciLicenseManagerProductLicenseImages">DataOciLicenseManagerProductLicenseImages</a>

---



