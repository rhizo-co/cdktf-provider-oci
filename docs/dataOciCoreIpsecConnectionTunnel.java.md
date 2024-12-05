# `dataOciCoreIpsecConnectionTunnel` Submodule <a name="`dataOciCoreIpsecConnectionTunnel` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreIpsecConnectionTunnel <a name="DataOciCoreIpsecConnectionTunnel" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel oci_core_ipsec_connection_tunnel}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_ipsec_connection_tunnel.DataOciCoreIpsecConnectionTunnel;

DataOciCoreIpsecConnectionTunnel.Builder.create(Construct scope, java.lang.String id)
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
    .ipsecId(java.lang.String)
    .tunnelId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.ipsecId">ipsecId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel#ipsec_id DataOciCoreIpsecConnectionTunnel#ipsec_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.tunnelId">tunnelId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel#tunnel_id DataOciCoreIpsecConnectionTunnel#tunnel_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ipsecId`<sup>Required</sup> <a name="ipsecId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.ipsecId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel#ipsec_id DataOciCoreIpsecConnectionTunnel#ipsec_id}.

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.tunnelId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel#tunnel_id DataOciCoreIpsecConnectionTunnel#tunnel_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreIpsecConnectionTunnel resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_ipsec_connection_tunnel.DataOciCoreIpsecConnectionTunnel;

DataOciCoreIpsecConnectionTunnel.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_ipsec_connection_tunnel.DataOciCoreIpsecConnectionTunnel;

DataOciCoreIpsecConnectionTunnel.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_ipsec_connection_tunnel.DataOciCoreIpsecConnectionTunnel;

DataOciCoreIpsecConnectionTunnel.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_ipsec_connection_tunnel.DataOciCoreIpsecConnectionTunnel;

DataOciCoreIpsecConnectionTunnel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciCoreIpsecConnectionTunnel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciCoreIpsecConnectionTunnel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciCoreIpsecConnectionTunnel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciCoreIpsecConnectionTunnel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreIpsecConnectionTunnel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.associatedVirtualCircuits">associatedVirtualCircuits</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.bgpSessionInfo">bgpSessionInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList">DataOciCoreIpsecConnectionTunnelBgpSessionInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.cpeIp">cpeIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.dpdConfig">dpdConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList">DataOciCoreIpsecConnectionTunnelDpdConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.dpdMode">dpdMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.dpdTimeoutInSec">dpdTimeoutInSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.encryptionDomainConfig">encryptionDomainConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList">DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.ikeVersion">ikeVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.natTranslationEnabled">natTranslationEnabled</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.oracleCanInitiate">oracleCanInitiate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.phaseOneDetails">phaseOneDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList">DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.phaseTwoDetails">phaseTwoDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList">DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.routing">routing</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.sharedSecret">sharedSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.timeStatusUpdated">timeStatusUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.vpnIp">vpnIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.ipsecIdInput">ipsecIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.tunnelIdInput">tunnelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.ipsecId">ipsecId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.tunnelId">tunnelId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `associatedVirtualCircuits`<sup>Required</sup> <a name="associatedVirtualCircuits" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.associatedVirtualCircuits"></a>

```java
public java.util.List<java.lang.String> getAssociatedVirtualCircuits();
```

- *Type:* java.util.List<java.lang.String>

---

##### `bgpSessionInfo`<sup>Required</sup> <a name="bgpSessionInfo" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.bgpSessionInfo"></a>

```java
public DataOciCoreIpsecConnectionTunnelBgpSessionInfoList getBgpSessionInfo();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList">DataOciCoreIpsecConnectionTunnelBgpSessionInfoList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `cpeIp`<sup>Required</sup> <a name="cpeIp" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.cpeIp"></a>

```java
public java.lang.String getCpeIp();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `dpdConfig`<sup>Required</sup> <a name="dpdConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.dpdConfig"></a>

```java
public DataOciCoreIpsecConnectionTunnelDpdConfigList getDpdConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList">DataOciCoreIpsecConnectionTunnelDpdConfigList</a>

---

##### `dpdMode`<sup>Required</sup> <a name="dpdMode" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.dpdMode"></a>

```java
public java.lang.String getDpdMode();
```

- *Type:* java.lang.String

---

##### `dpdTimeoutInSec`<sup>Required</sup> <a name="dpdTimeoutInSec" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.dpdTimeoutInSec"></a>

```java
public java.lang.Number getDpdTimeoutInSec();
```

- *Type:* java.lang.Number

---

##### `encryptionDomainConfig`<sup>Required</sup> <a name="encryptionDomainConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.encryptionDomainConfig"></a>

```java
public DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList getEncryptionDomainConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList">DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ikeVersion`<sup>Required</sup> <a name="ikeVersion" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.ikeVersion"></a>

```java
public java.lang.String getIkeVersion();
```

- *Type:* java.lang.String

---

##### `natTranslationEnabled`<sup>Required</sup> <a name="natTranslationEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.natTranslationEnabled"></a>

```java
public java.lang.String getNatTranslationEnabled();
```

- *Type:* java.lang.String

---

##### `oracleCanInitiate`<sup>Required</sup> <a name="oracleCanInitiate" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.oracleCanInitiate"></a>

```java
public java.lang.String getOracleCanInitiate();
```

- *Type:* java.lang.String

---

##### `phaseOneDetails`<sup>Required</sup> <a name="phaseOneDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.phaseOneDetails"></a>

```java
public DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList getPhaseOneDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList">DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList</a>

---

##### `phaseTwoDetails`<sup>Required</sup> <a name="phaseTwoDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.phaseTwoDetails"></a>

```java
public DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList getPhaseTwoDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList">DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList</a>

---

##### `routing`<sup>Required</sup> <a name="routing" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.routing"></a>

```java
public java.lang.String getRouting();
```

- *Type:* java.lang.String

---

##### `sharedSecret`<sup>Required</sup> <a name="sharedSecret" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.sharedSecret"></a>

```java
public java.lang.String getSharedSecret();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeStatusUpdated`<sup>Required</sup> <a name="timeStatusUpdated" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.timeStatusUpdated"></a>

```java
public java.lang.String getTimeStatusUpdated();
```

- *Type:* java.lang.String

---

##### `vpnIp`<sup>Required</sup> <a name="vpnIp" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.vpnIp"></a>

```java
public java.lang.String getVpnIp();
```

- *Type:* java.lang.String

---

##### `ipsecIdInput`<sup>Optional</sup> <a name="ipsecIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.ipsecIdInput"></a>

```java
public java.lang.String getIpsecIdInput();
```

- *Type:* java.lang.String

---

##### `tunnelIdInput`<sup>Optional</sup> <a name="tunnelIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.tunnelIdInput"></a>

```java
public java.lang.String getTunnelIdInput();
```

- *Type:* java.lang.String

---

##### `ipsecId`<sup>Required</sup> <a name="ipsecId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.ipsecId"></a>

```java
public java.lang.String getIpsecId();
```

- *Type:* java.lang.String

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.tunnelId"></a>

```java
public java.lang.String getTunnelId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreIpsecConnectionTunnelBgpSessionInfo <a name="DataOciCoreIpsecConnectionTunnelBgpSessionInfo" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_ipsec_connection_tunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfo;

DataOciCoreIpsecConnectionTunnelBgpSessionInfo.builder()
    .build();
```


### DataOciCoreIpsecConnectionTunnelConfig <a name="DataOciCoreIpsecConnectionTunnelConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_ipsec_connection_tunnel.DataOciCoreIpsecConnectionTunnelConfig;

DataOciCoreIpsecConnectionTunnelConfig.builder()
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
    .ipsecId(java.lang.String)
    .tunnelId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.ipsecId">ipsecId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel#ipsec_id DataOciCoreIpsecConnectionTunnel#ipsec_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.tunnelId">tunnelId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel#tunnel_id DataOciCoreIpsecConnectionTunnel#tunnel_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ipsecId`<sup>Required</sup> <a name="ipsecId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.ipsecId"></a>

```java
public java.lang.String getIpsecId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel#ipsec_id DataOciCoreIpsecConnectionTunnel#ipsec_id}.

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.tunnelId"></a>

```java
public java.lang.String getTunnelId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel#tunnel_id DataOciCoreIpsecConnectionTunnel#tunnel_id}.

---

### DataOciCoreIpsecConnectionTunnelDpdConfig <a name="DataOciCoreIpsecConnectionTunnelDpdConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_ipsec_connection_tunnel.DataOciCoreIpsecConnectionTunnelDpdConfig;

DataOciCoreIpsecConnectionTunnelDpdConfig.builder()
    .build();
```


### DataOciCoreIpsecConnectionTunnelEncryptionDomainConfig <a name="DataOciCoreIpsecConnectionTunnelEncryptionDomainConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_ipsec_connection_tunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfig;

DataOciCoreIpsecConnectionTunnelEncryptionDomainConfig.builder()
    .build();
```


### DataOciCoreIpsecConnectionTunnelPhaseOneDetails <a name="DataOciCoreIpsecConnectionTunnelPhaseOneDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_ipsec_connection_tunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetails;

DataOciCoreIpsecConnectionTunnelPhaseOneDetails.builder()
    .build();
```


### DataOciCoreIpsecConnectionTunnelPhaseTwoDetails <a name="DataOciCoreIpsecConnectionTunnelPhaseTwoDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_ipsec_connection_tunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetails;

DataOciCoreIpsecConnectionTunnelPhaseTwoDetails.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreIpsecConnectionTunnelBgpSessionInfoList <a name="DataOciCoreIpsecConnectionTunnelBgpSessionInfoList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_ipsec_connection_tunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList;

new DataOciCoreIpsecConnectionTunnelBgpSessionInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.get"></a>

```java
public DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference <a name="DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_ipsec_connection_tunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference;

new DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.bgpIpv6State">bgpIpv6State</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.bgpState">bgpState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.customerBgpAsn">customerBgpAsn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.customerInterfaceIp">customerInterfaceIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.customerInterfaceIpv6">customerInterfaceIpv6</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.oracleBgpAsn">oracleBgpAsn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.oracleInterfaceIp">oracleInterfaceIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.oracleInterfaceIpv6">oracleInterfaceIpv6</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfo">DataOciCoreIpsecConnectionTunnelBgpSessionInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bgpIpv6State`<sup>Required</sup> <a name="bgpIpv6State" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.bgpIpv6State"></a>

```java
public java.lang.String getBgpIpv6State();
```

- *Type:* java.lang.String

---

##### `bgpState`<sup>Required</sup> <a name="bgpState" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.bgpState"></a>

```java
public java.lang.String getBgpState();
```

- *Type:* java.lang.String

---

##### `customerBgpAsn`<sup>Required</sup> <a name="customerBgpAsn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.customerBgpAsn"></a>

```java
public java.lang.String getCustomerBgpAsn();
```

- *Type:* java.lang.String

---

##### `customerInterfaceIp`<sup>Required</sup> <a name="customerInterfaceIp" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.customerInterfaceIp"></a>

```java
public java.lang.String getCustomerInterfaceIp();
```

- *Type:* java.lang.String

---

##### `customerInterfaceIpv6`<sup>Required</sup> <a name="customerInterfaceIpv6" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.customerInterfaceIpv6"></a>

```java
public java.lang.String getCustomerInterfaceIpv6();
```

- *Type:* java.lang.String

---

##### `oracleBgpAsn`<sup>Required</sup> <a name="oracleBgpAsn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.oracleBgpAsn"></a>

```java
public java.lang.String getOracleBgpAsn();
```

- *Type:* java.lang.String

---

##### `oracleInterfaceIp`<sup>Required</sup> <a name="oracleInterfaceIp" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.oracleInterfaceIp"></a>

```java
public java.lang.String getOracleInterfaceIp();
```

- *Type:* java.lang.String

---

##### `oracleInterfaceIpv6`<sup>Required</sup> <a name="oracleInterfaceIpv6" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.oracleInterfaceIpv6"></a>

```java
public java.lang.String getOracleInterfaceIpv6();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.internalValue"></a>

```java
public DataOciCoreIpsecConnectionTunnelBgpSessionInfo getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfo">DataOciCoreIpsecConnectionTunnelBgpSessionInfo</a>

---


### DataOciCoreIpsecConnectionTunnelDpdConfigList <a name="DataOciCoreIpsecConnectionTunnelDpdConfigList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_ipsec_connection_tunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList;

new DataOciCoreIpsecConnectionTunnelDpdConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.get"></a>

```java
public DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference <a name="DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_ipsec_connection_tunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference;

new DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.property.dpdMode">dpdMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.property.dpdTimeoutInSec">dpdTimeoutInSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfig">DataOciCoreIpsecConnectionTunnelDpdConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dpdMode`<sup>Required</sup> <a name="dpdMode" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.property.dpdMode"></a>

```java
public java.lang.String getDpdMode();
```

- *Type:* java.lang.String

---

##### `dpdTimeoutInSec`<sup>Required</sup> <a name="dpdTimeoutInSec" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.property.dpdTimeoutInSec"></a>

```java
public java.lang.Number getDpdTimeoutInSec();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.property.internalValue"></a>

```java
public DataOciCoreIpsecConnectionTunnelDpdConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfig">DataOciCoreIpsecConnectionTunnelDpdConfig</a>

---


### DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList <a name="DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_ipsec_connection_tunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList;

new DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.get"></a>

```java
public DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference <a name="DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_ipsec_connection_tunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference;

new DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.property.cpeTrafficSelector">cpeTrafficSelector</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.property.oracleTrafficSelector">oracleTrafficSelector</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfig">DataOciCoreIpsecConnectionTunnelEncryptionDomainConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cpeTrafficSelector`<sup>Required</sup> <a name="cpeTrafficSelector" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.property.cpeTrafficSelector"></a>

```java
public java.util.List<java.lang.String> getCpeTrafficSelector();
```

- *Type:* java.util.List<java.lang.String>

---

##### `oracleTrafficSelector`<sup>Required</sup> <a name="oracleTrafficSelector" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.property.oracleTrafficSelector"></a>

```java
public java.util.List<java.lang.String> getOracleTrafficSelector();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.property.internalValue"></a>

```java
public DataOciCoreIpsecConnectionTunnelEncryptionDomainConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfig">DataOciCoreIpsecConnectionTunnelEncryptionDomainConfig</a>

---


### DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList <a name="DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_ipsec_connection_tunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList;

new DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.get"></a>

```java
public DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference <a name="DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_ipsec_connection_tunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference;

new DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.customAuthenticationAlgorithm">customAuthenticationAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.customDhGroup">customDhGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.customEncryptionAlgorithm">customEncryptionAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.isCustomPhaseOneConfig">isCustomPhaseOneConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.isIkeEstablished">isIkeEstablished</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.lifetime">lifetime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.negotiatedAuthenticationAlgorithm">negotiatedAuthenticationAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.negotiatedDhGroup">negotiatedDhGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.negotiatedEncryptionAlgorithm">negotiatedEncryptionAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.remainingLifetime">remainingLifetime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.remainingLifetimeInt">remainingLifetimeInt</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.remainingLifetimeLastRetrieved">remainingLifetimeLastRetrieved</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetails">DataOciCoreIpsecConnectionTunnelPhaseOneDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customAuthenticationAlgorithm`<sup>Required</sup> <a name="customAuthenticationAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.customAuthenticationAlgorithm"></a>

```java
public java.lang.String getCustomAuthenticationAlgorithm();
```

- *Type:* java.lang.String

---

##### `customDhGroup`<sup>Required</sup> <a name="customDhGroup" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.customDhGroup"></a>

```java
public java.lang.String getCustomDhGroup();
```

- *Type:* java.lang.String

---

##### `customEncryptionAlgorithm`<sup>Required</sup> <a name="customEncryptionAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.customEncryptionAlgorithm"></a>

```java
public java.lang.String getCustomEncryptionAlgorithm();
```

- *Type:* java.lang.String

---

##### `isCustomPhaseOneConfig`<sup>Required</sup> <a name="isCustomPhaseOneConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.isCustomPhaseOneConfig"></a>

```java
public IResolvable getIsCustomPhaseOneConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isIkeEstablished`<sup>Required</sup> <a name="isIkeEstablished" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.isIkeEstablished"></a>

```java
public IResolvable getIsIkeEstablished();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `lifetime`<sup>Required</sup> <a name="lifetime" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.lifetime"></a>

```java
public java.lang.Number getLifetime();
```

- *Type:* java.lang.Number

---

##### `negotiatedAuthenticationAlgorithm`<sup>Required</sup> <a name="negotiatedAuthenticationAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.negotiatedAuthenticationAlgorithm"></a>

```java
public java.lang.String getNegotiatedAuthenticationAlgorithm();
```

- *Type:* java.lang.String

---

##### `negotiatedDhGroup`<sup>Required</sup> <a name="negotiatedDhGroup" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.negotiatedDhGroup"></a>

```java
public java.lang.String getNegotiatedDhGroup();
```

- *Type:* java.lang.String

---

##### `negotiatedEncryptionAlgorithm`<sup>Required</sup> <a name="negotiatedEncryptionAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.negotiatedEncryptionAlgorithm"></a>

```java
public java.lang.String getNegotiatedEncryptionAlgorithm();
```

- *Type:* java.lang.String

---

##### `remainingLifetime`<sup>Required</sup> <a name="remainingLifetime" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.remainingLifetime"></a>

```java
public java.lang.String getRemainingLifetime();
```

- *Type:* java.lang.String

---

##### `remainingLifetimeInt`<sup>Required</sup> <a name="remainingLifetimeInt" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.remainingLifetimeInt"></a>

```java
public java.lang.Number getRemainingLifetimeInt();
```

- *Type:* java.lang.Number

---

##### `remainingLifetimeLastRetrieved`<sup>Required</sup> <a name="remainingLifetimeLastRetrieved" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.remainingLifetimeLastRetrieved"></a>

```java
public java.lang.String getRemainingLifetimeLastRetrieved();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.internalValue"></a>

```java
public DataOciCoreIpsecConnectionTunnelPhaseOneDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetails">DataOciCoreIpsecConnectionTunnelPhaseOneDetails</a>

---


### DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList <a name="DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_ipsec_connection_tunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList;

new DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.get"></a>

```java
public DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference <a name="DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_ipsec_connection_tunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference;

new DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.customAuthenticationAlgorithm">customAuthenticationAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.customEncryptionAlgorithm">customEncryptionAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.dhGroup">dhGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.isCustomPhaseTwoConfig">isCustomPhaseTwoConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.isEspEstablished">isEspEstablished</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.isPfsEnabled">isPfsEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.lifetime">lifetime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.negotiatedAuthenticationAlgorithm">negotiatedAuthenticationAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.negotiatedDhGroup">negotiatedDhGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.negotiatedEncryptionAlgorithm">negotiatedEncryptionAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.remainingLifetime">remainingLifetime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.remainingLifetimeInt">remainingLifetimeInt</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.remainingLifetimeLastRetrieved">remainingLifetimeLastRetrieved</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetails">DataOciCoreIpsecConnectionTunnelPhaseTwoDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customAuthenticationAlgorithm`<sup>Required</sup> <a name="customAuthenticationAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.customAuthenticationAlgorithm"></a>

```java
public java.lang.String getCustomAuthenticationAlgorithm();
```

- *Type:* java.lang.String

---

##### `customEncryptionAlgorithm`<sup>Required</sup> <a name="customEncryptionAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.customEncryptionAlgorithm"></a>

```java
public java.lang.String getCustomEncryptionAlgorithm();
```

- *Type:* java.lang.String

---

##### `dhGroup`<sup>Required</sup> <a name="dhGroup" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.dhGroup"></a>

```java
public java.lang.String getDhGroup();
```

- *Type:* java.lang.String

---

##### `isCustomPhaseTwoConfig`<sup>Required</sup> <a name="isCustomPhaseTwoConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.isCustomPhaseTwoConfig"></a>

```java
public IResolvable getIsCustomPhaseTwoConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isEspEstablished`<sup>Required</sup> <a name="isEspEstablished" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.isEspEstablished"></a>

```java
public IResolvable getIsEspEstablished();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isPfsEnabled`<sup>Required</sup> <a name="isPfsEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.isPfsEnabled"></a>

```java
public IResolvable getIsPfsEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `lifetime`<sup>Required</sup> <a name="lifetime" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.lifetime"></a>

```java
public java.lang.Number getLifetime();
```

- *Type:* java.lang.Number

---

##### `negotiatedAuthenticationAlgorithm`<sup>Required</sup> <a name="negotiatedAuthenticationAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.negotiatedAuthenticationAlgorithm"></a>

```java
public java.lang.String getNegotiatedAuthenticationAlgorithm();
```

- *Type:* java.lang.String

---

##### `negotiatedDhGroup`<sup>Required</sup> <a name="negotiatedDhGroup" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.negotiatedDhGroup"></a>

```java
public java.lang.String getNegotiatedDhGroup();
```

- *Type:* java.lang.String

---

##### `negotiatedEncryptionAlgorithm`<sup>Required</sup> <a name="negotiatedEncryptionAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.negotiatedEncryptionAlgorithm"></a>

```java
public java.lang.String getNegotiatedEncryptionAlgorithm();
```

- *Type:* java.lang.String

---

##### `remainingLifetime`<sup>Required</sup> <a name="remainingLifetime" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.remainingLifetime"></a>

```java
public java.lang.String getRemainingLifetime();
```

- *Type:* java.lang.String

---

##### `remainingLifetimeInt`<sup>Required</sup> <a name="remainingLifetimeInt" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.remainingLifetimeInt"></a>

```java
public java.lang.Number getRemainingLifetimeInt();
```

- *Type:* java.lang.Number

---

##### `remainingLifetimeLastRetrieved`<sup>Required</sup> <a name="remainingLifetimeLastRetrieved" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.remainingLifetimeLastRetrieved"></a>

```java
public java.lang.String getRemainingLifetimeLastRetrieved();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.internalValue"></a>

```java
public DataOciCoreIpsecConnectionTunnelPhaseTwoDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetails">DataOciCoreIpsecConnectionTunnelPhaseTwoDetails</a>

---



