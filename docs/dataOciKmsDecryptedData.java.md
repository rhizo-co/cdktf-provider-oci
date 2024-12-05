# `dataOciKmsDecryptedData` Submodule <a name="`dataOciKmsDecryptedData` Submodule" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciKmsDecryptedData <a name="DataOciKmsDecryptedData" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_decrypted_data oci_kms_decrypted_data}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_kms_decrypted_data.DataOciKmsDecryptedData;

DataOciKmsDecryptedData.Builder.create(Construct scope, java.lang.String id)
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
    .ciphertext(java.lang.String)
    .cryptoEndpoint(java.lang.String)
    .keyId(java.lang.String)
//  .associatedData(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.Initializer.parameter.ciphertext">ciphertext</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_decrypted_data#ciphertext DataOciKmsDecryptedData#ciphertext}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.Initializer.parameter.cryptoEndpoint">cryptoEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_decrypted_data#crypto_endpoint DataOciKmsDecryptedData#crypto_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.Initializer.parameter.keyId">keyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_decrypted_data#key_id DataOciKmsDecryptedData#key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.Initializer.parameter.associatedData">associatedData</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_decrypted_data#associated_data DataOciKmsDecryptedData#associated_data}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_decrypted_data#id DataOciKmsDecryptedData#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ciphertext`<sup>Required</sup> <a name="ciphertext" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.Initializer.parameter.ciphertext"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_decrypted_data#ciphertext DataOciKmsDecryptedData#ciphertext}.

---

##### `cryptoEndpoint`<sup>Required</sup> <a name="cryptoEndpoint" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.Initializer.parameter.cryptoEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_decrypted_data#crypto_endpoint DataOciKmsDecryptedData#crypto_endpoint}.

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.Initializer.parameter.keyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_decrypted_data#key_id DataOciKmsDecryptedData#key_id}.

---

##### `associatedData`<sup>Optional</sup> <a name="associatedData" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.Initializer.parameter.associatedData"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_decrypted_data#associated_data DataOciKmsDecryptedData#associated_data}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_decrypted_data#id DataOciKmsDecryptedData#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.resetAssociatedData">resetAssociatedData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAssociatedData` <a name="resetAssociatedData" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.resetAssociatedData"></a>

```java
public void resetAssociatedData()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciKmsDecryptedData resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_kms_decrypted_data.DataOciKmsDecryptedData;

DataOciKmsDecryptedData.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_kms_decrypted_data.DataOciKmsDecryptedData;

DataOciKmsDecryptedData.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_kms_decrypted_data.DataOciKmsDecryptedData;

DataOciKmsDecryptedData.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_kms_decrypted_data.DataOciKmsDecryptedData;

DataOciKmsDecryptedData.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciKmsDecryptedData.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciKmsDecryptedData resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciKmsDecryptedData to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciKmsDecryptedData that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_decrypted_data#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciKmsDecryptedData to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.plaintext">plaintext</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.plaintextChecksum">plaintextChecksum</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.associatedDataInput">associatedDataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.ciphertextInput">ciphertextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.cryptoEndpointInput">cryptoEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.keyIdInput">keyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.associatedData">associatedData</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.ciphertext">ciphertext</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.cryptoEndpoint">cryptoEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.keyId">keyId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.plaintext"></a>

```java
public java.lang.String getPlaintext();
```

- *Type:* java.lang.String

---

##### `plaintextChecksum`<sup>Required</sup> <a name="plaintextChecksum" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.plaintextChecksum"></a>

```java
public java.lang.String getPlaintextChecksum();
```

- *Type:* java.lang.String

---

##### `associatedDataInput`<sup>Optional</sup> <a name="associatedDataInput" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.associatedDataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAssociatedDataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `ciphertextInput`<sup>Optional</sup> <a name="ciphertextInput" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.ciphertextInput"></a>

```java
public java.lang.String getCiphertextInput();
```

- *Type:* java.lang.String

---

##### `cryptoEndpointInput`<sup>Optional</sup> <a name="cryptoEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.cryptoEndpointInput"></a>

```java
public java.lang.String getCryptoEndpointInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.keyIdInput"></a>

```java
public java.lang.String getKeyIdInput();
```

- *Type:* java.lang.String

---

##### `associatedData`<sup>Required</sup> <a name="associatedData" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.associatedData"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAssociatedData();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `ciphertext`<sup>Required</sup> <a name="ciphertext" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.ciphertext"></a>

```java
public java.lang.String getCiphertext();
```

- *Type:* java.lang.String

---

##### `cryptoEndpoint`<sup>Required</sup> <a name="cryptoEndpoint" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.cryptoEndpoint"></a>

```java
public java.lang.String getCryptoEndpoint();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedData.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciKmsDecryptedDataConfig <a name="DataOciKmsDecryptedDataConfig" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedDataConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedDataConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_kms_decrypted_data.DataOciKmsDecryptedDataConfig;

DataOciKmsDecryptedDataConfig.builder()
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
    .ciphertext(java.lang.String)
    .cryptoEndpoint(java.lang.String)
    .keyId(java.lang.String)
//  .associatedData(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedDataConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedDataConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedDataConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedDataConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedDataConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedDataConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedDataConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedDataConfig.property.ciphertext">ciphertext</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_decrypted_data#ciphertext DataOciKmsDecryptedData#ciphertext}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedDataConfig.property.cryptoEndpoint">cryptoEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_decrypted_data#crypto_endpoint DataOciKmsDecryptedData#crypto_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedDataConfig.property.keyId">keyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_decrypted_data#key_id DataOciKmsDecryptedData#key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedDataConfig.property.associatedData">associatedData</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_decrypted_data#associated_data DataOciKmsDecryptedData#associated_data}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedDataConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_decrypted_data#id DataOciKmsDecryptedData#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedDataConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedDataConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedDataConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedDataConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedDataConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedDataConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedDataConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ciphertext`<sup>Required</sup> <a name="ciphertext" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedDataConfig.property.ciphertext"></a>

```java
public java.lang.String getCiphertext();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_decrypted_data#ciphertext DataOciKmsDecryptedData#ciphertext}.

---

##### `cryptoEndpoint`<sup>Required</sup> <a name="cryptoEndpoint" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedDataConfig.property.cryptoEndpoint"></a>

```java
public java.lang.String getCryptoEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_decrypted_data#crypto_endpoint DataOciKmsDecryptedData#crypto_endpoint}.

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedDataConfig.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_decrypted_data#key_id DataOciKmsDecryptedData#key_id}.

---

##### `associatedData`<sup>Optional</sup> <a name="associatedData" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedDataConfig.property.associatedData"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAssociatedData();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_decrypted_data#associated_data DataOciKmsDecryptedData#associated_data}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciKmsDecryptedData.DataOciKmsDecryptedDataConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_decrypted_data#id DataOciKmsDecryptedData#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



