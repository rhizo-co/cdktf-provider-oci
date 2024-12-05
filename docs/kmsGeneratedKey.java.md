# `kmsGeneratedKey` Submodule <a name="`kmsGeneratedKey` Submodule" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmsGeneratedKey <a name="KmsGeneratedKey" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key oci_kms_generated_key}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.kms_generated_key.KmsGeneratedKey;

KmsGeneratedKey.Builder.create(Construct scope, java.lang.String id)
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
    .cryptoEndpoint(java.lang.String)
    .includePlaintextKey(java.lang.Boolean)
    .includePlaintextKey(IResolvable)
    .keyId(java.lang.String)
    .keyShape(KmsGeneratedKeyKeyShape)
//  .associatedData(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .loggingContext(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(KmsGeneratedKeyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.cryptoEndpoint">cryptoEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#crypto_endpoint KmsGeneratedKey#crypto_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.includePlaintextKey">includePlaintextKey</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#include_plaintext_key KmsGeneratedKey#include_plaintext_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.keyId">keyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#key_id KmsGeneratedKey#key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.keyShape">keyShape</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape">KmsGeneratedKeyKeyShape</a></code> | key_shape block. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.associatedData">associatedData</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#associated_data KmsGeneratedKey#associated_data}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#id KmsGeneratedKey#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.loggingContext">loggingContext</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#logging_context KmsGeneratedKey#logging_context}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts">KmsGeneratedKeyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cryptoEndpoint`<sup>Required</sup> <a name="cryptoEndpoint" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.cryptoEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#crypto_endpoint KmsGeneratedKey#crypto_endpoint}.

---

##### `includePlaintextKey`<sup>Required</sup> <a name="includePlaintextKey" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.includePlaintextKey"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#include_plaintext_key KmsGeneratedKey#include_plaintext_key}.

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.keyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#key_id KmsGeneratedKey#key_id}.

---

##### `keyShape`<sup>Required</sup> <a name="keyShape" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.keyShape"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape">KmsGeneratedKeyKeyShape</a>

key_shape block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#key_shape KmsGeneratedKey#key_shape}

---

##### `associatedData`<sup>Optional</sup> <a name="associatedData" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.associatedData"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#associated_data KmsGeneratedKey#associated_data}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#id KmsGeneratedKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loggingContext`<sup>Optional</sup> <a name="loggingContext" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.loggingContext"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#logging_context KmsGeneratedKey#logging_context}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts">KmsGeneratedKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#timeouts KmsGeneratedKey#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.putKeyShape">putKeyShape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.resetAssociatedData">resetAssociatedData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.resetLoggingContext">resetLoggingContext</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putKeyShape` <a name="putKeyShape" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.putKeyShape"></a>

```java
public void putKeyShape(KmsGeneratedKeyKeyShape value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.putKeyShape.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape">KmsGeneratedKeyKeyShape</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.putTimeouts"></a>

```java
public void putTimeouts(KmsGeneratedKeyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts">KmsGeneratedKeyTimeouts</a>

---

##### `resetAssociatedData` <a name="resetAssociatedData" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.resetAssociatedData"></a>

```java
public void resetAssociatedData()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.resetId"></a>

```java
public void resetId()
```

##### `resetLoggingContext` <a name="resetLoggingContext" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.resetLoggingContext"></a>

```java
public void resetLoggingContext()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a KmsGeneratedKey resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.kms_generated_key.KmsGeneratedKey;

KmsGeneratedKey.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.kms_generated_key.KmsGeneratedKey;

KmsGeneratedKey.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.kms_generated_key.KmsGeneratedKey;

KmsGeneratedKey.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.kms_generated_key.KmsGeneratedKey;

KmsGeneratedKey.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),KmsGeneratedKey.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a KmsGeneratedKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the KmsGeneratedKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing KmsGeneratedKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the KmsGeneratedKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.ciphertext">ciphertext</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.keyShape">keyShape</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference">KmsGeneratedKeyKeyShapeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.plaintext">plaintext</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.plaintextChecksum">plaintextChecksum</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference">KmsGeneratedKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.associatedDataInput">associatedDataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.cryptoEndpointInput">cryptoEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.includePlaintextKeyInput">includePlaintextKeyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.keyIdInput">keyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.keyShapeInput">keyShapeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape">KmsGeneratedKeyKeyShape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.loggingContextInput">loggingContextInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts">KmsGeneratedKeyTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.associatedData">associatedData</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.cryptoEndpoint">cryptoEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.includePlaintextKey">includePlaintextKey</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.keyId">keyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.loggingContext">loggingContext</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ciphertext`<sup>Required</sup> <a name="ciphertext" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.ciphertext"></a>

```java
public java.lang.String getCiphertext();
```

- *Type:* java.lang.String

---

##### `keyShape`<sup>Required</sup> <a name="keyShape" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.keyShape"></a>

```java
public KmsGeneratedKeyKeyShapeOutputReference getKeyShape();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference">KmsGeneratedKeyKeyShapeOutputReference</a>

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.plaintext"></a>

```java
public java.lang.String getPlaintext();
```

- *Type:* java.lang.String

---

##### `plaintextChecksum`<sup>Required</sup> <a name="plaintextChecksum" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.plaintextChecksum"></a>

```java
public java.lang.String getPlaintextChecksum();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.timeouts"></a>

```java
public KmsGeneratedKeyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference">KmsGeneratedKeyTimeoutsOutputReference</a>

---

##### `associatedDataInput`<sup>Optional</sup> <a name="associatedDataInput" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.associatedDataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAssociatedDataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `cryptoEndpointInput`<sup>Optional</sup> <a name="cryptoEndpointInput" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.cryptoEndpointInput"></a>

```java
public java.lang.String getCryptoEndpointInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `includePlaintextKeyInput`<sup>Optional</sup> <a name="includePlaintextKeyInput" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.includePlaintextKeyInput"></a>

```java
public java.lang.Object getIncludePlaintextKeyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.keyIdInput"></a>

```java
public java.lang.String getKeyIdInput();
```

- *Type:* java.lang.String

---

##### `keyShapeInput`<sup>Optional</sup> <a name="keyShapeInput" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.keyShapeInput"></a>

```java
public KmsGeneratedKeyKeyShape getKeyShapeInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape">KmsGeneratedKeyKeyShape</a>

---

##### `loggingContextInput`<sup>Optional</sup> <a name="loggingContextInput" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.loggingContextInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLoggingContextInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts">KmsGeneratedKeyTimeouts</a>

---

##### `associatedData`<sup>Required</sup> <a name="associatedData" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.associatedData"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAssociatedData();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `cryptoEndpoint`<sup>Required</sup> <a name="cryptoEndpoint" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.cryptoEndpoint"></a>

```java
public java.lang.String getCryptoEndpoint();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `includePlaintextKey`<sup>Required</sup> <a name="includePlaintextKey" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.includePlaintextKey"></a>

```java
public java.lang.Object getIncludePlaintextKey();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

---

##### `loggingContext`<sup>Required</sup> <a name="loggingContext" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.loggingContext"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLoggingContext();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KmsGeneratedKeyConfig <a name="KmsGeneratedKeyConfig" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.kms_generated_key.KmsGeneratedKeyConfig;

KmsGeneratedKeyConfig.builder()
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
    .cryptoEndpoint(java.lang.String)
    .includePlaintextKey(java.lang.Boolean)
    .includePlaintextKey(IResolvable)
    .keyId(java.lang.String)
    .keyShape(KmsGeneratedKeyKeyShape)
//  .associatedData(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .loggingContext(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(KmsGeneratedKeyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.cryptoEndpoint">cryptoEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#crypto_endpoint KmsGeneratedKey#crypto_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.includePlaintextKey">includePlaintextKey</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#include_plaintext_key KmsGeneratedKey#include_plaintext_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.keyId">keyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#key_id KmsGeneratedKey#key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.keyShape">keyShape</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape">KmsGeneratedKeyKeyShape</a></code> | key_shape block. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.associatedData">associatedData</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#associated_data KmsGeneratedKey#associated_data}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#id KmsGeneratedKey#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.loggingContext">loggingContext</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#logging_context KmsGeneratedKey#logging_context}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts">KmsGeneratedKeyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cryptoEndpoint`<sup>Required</sup> <a name="cryptoEndpoint" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.cryptoEndpoint"></a>

```java
public java.lang.String getCryptoEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#crypto_endpoint KmsGeneratedKey#crypto_endpoint}.

---

##### `includePlaintextKey`<sup>Required</sup> <a name="includePlaintextKey" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.includePlaintextKey"></a>

```java
public java.lang.Object getIncludePlaintextKey();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#include_plaintext_key KmsGeneratedKey#include_plaintext_key}.

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#key_id KmsGeneratedKey#key_id}.

---

##### `keyShape`<sup>Required</sup> <a name="keyShape" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.keyShape"></a>

```java
public KmsGeneratedKeyKeyShape getKeyShape();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape">KmsGeneratedKeyKeyShape</a>

key_shape block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#key_shape KmsGeneratedKey#key_shape}

---

##### `associatedData`<sup>Optional</sup> <a name="associatedData" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.associatedData"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAssociatedData();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#associated_data KmsGeneratedKey#associated_data}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#id KmsGeneratedKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loggingContext`<sup>Optional</sup> <a name="loggingContext" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.loggingContext"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLoggingContext();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#logging_context KmsGeneratedKey#logging_context}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.timeouts"></a>

```java
public KmsGeneratedKeyTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts">KmsGeneratedKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#timeouts KmsGeneratedKey#timeouts}

---

### KmsGeneratedKeyKeyShape <a name="KmsGeneratedKeyKeyShape" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.kms_generated_key.KmsGeneratedKeyKeyShape;

KmsGeneratedKeyKeyShape.builder()
    .algorithm(java.lang.String)
    .length(java.lang.Number)
//  .curveId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#algorithm KmsGeneratedKey#algorithm}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape.property.length">length</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#length KmsGeneratedKey#length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape.property.curveId">curveId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#curve_id KmsGeneratedKey#curve_id}. |

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#algorithm KmsGeneratedKey#algorithm}.

---

##### `length`<sup>Required</sup> <a name="length" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape.property.length"></a>

```java
public java.lang.Number getLength();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#length KmsGeneratedKey#length}.

---

##### `curveId`<sup>Optional</sup> <a name="curveId" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape.property.curveId"></a>

```java
public java.lang.String getCurveId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#curve_id KmsGeneratedKey#curve_id}.

---

### KmsGeneratedKeyTimeouts <a name="KmsGeneratedKeyTimeouts" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.kms_generated_key.KmsGeneratedKeyTimeouts;

KmsGeneratedKeyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#create KmsGeneratedKey#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#delete KmsGeneratedKey#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#update KmsGeneratedKey#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#create KmsGeneratedKey#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#delete KmsGeneratedKey#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#update KmsGeneratedKey#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KmsGeneratedKeyKeyShapeOutputReference <a name="KmsGeneratedKeyKeyShapeOutputReference" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.kms_generated_key.KmsGeneratedKeyKeyShapeOutputReference;

new KmsGeneratedKeyKeyShapeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.resetCurveId">resetCurveId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCurveId` <a name="resetCurveId" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.resetCurveId"></a>

```java
public void resetCurveId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.algorithmInput">algorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.curveIdInput">curveIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.lengthInput">lengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.curveId">curveId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.length">length</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape">KmsGeneratedKeyKeyShape</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.algorithmInput"></a>

```java
public java.lang.String getAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `curveIdInput`<sup>Optional</sup> <a name="curveIdInput" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.curveIdInput"></a>

```java
public java.lang.String getCurveIdInput();
```

- *Type:* java.lang.String

---

##### `lengthInput`<sup>Optional</sup> <a name="lengthInput" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.lengthInput"></a>

```java
public java.lang.Number getLengthInput();
```

- *Type:* java.lang.Number

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

---

##### `curveId`<sup>Required</sup> <a name="curveId" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.curveId"></a>

```java
public java.lang.String getCurveId();
```

- *Type:* java.lang.String

---

##### `length`<sup>Required</sup> <a name="length" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.length"></a>

```java
public java.lang.Number getLength();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.internalValue"></a>

```java
public KmsGeneratedKeyKeyShape getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape">KmsGeneratedKeyKeyShape</a>

---


### KmsGeneratedKeyTimeoutsOutputReference <a name="KmsGeneratedKeyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.kms_generated_key.KmsGeneratedKeyTimeoutsOutputReference;

new KmsGeneratedKeyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts">KmsGeneratedKeyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts">KmsGeneratedKeyTimeouts</a>

---



