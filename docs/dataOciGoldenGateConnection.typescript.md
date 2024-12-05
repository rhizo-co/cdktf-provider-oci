# `dataOciGoldenGateConnection` Submodule <a name="`dataOciGoldenGateConnection` Submodule" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciGoldenGateConnection <a name="DataOciGoldenGateConnection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connection oci_golden_gate_connection}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.Initializer"></a>

```typescript
import { dataOciGoldenGateConnection } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateConnection.DataOciGoldenGateConnection(scope: Construct, id: string, config: DataOciGoldenGateConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionConfig">DataOciGoldenGateConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionConfig">DataOciGoldenGateConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciGoldenGateConnection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.isConstruct"></a>

```typescript
import { dataOciGoldenGateConnection } from 'rhizo-co-terraform-provider-oci'

dataOciGoldenGateConnection.DataOciGoldenGateConnection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.isTerraformElement"></a>

```typescript
import { dataOciGoldenGateConnection } from 'rhizo-co-terraform-provider-oci'

dataOciGoldenGateConnection.DataOciGoldenGateConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.isTerraformDataSource"></a>

```typescript
import { dataOciGoldenGateConnection } from 'rhizo-co-terraform-provider-oci'

dataOciGoldenGateConnection.DataOciGoldenGateConnection.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.generateConfigForImport"></a>

```typescript
import { dataOciGoldenGateConnection } from 'rhizo-co-terraform-provider-oci'

dataOciGoldenGateConnection.DataOciGoldenGateConnection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciGoldenGateConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciGoldenGateConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciGoldenGateConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciGoldenGateConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.accessKeyId">accessKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.accountKey">accountKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.accountKeySecretId">accountKeySecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.accountName">accountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.additionalAttributes">additionalAttributes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesList">DataOciGoldenGateConnectionAdditionalAttributesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.authenticationMode">authenticationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.authenticationType">authenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.azureTenantId">azureTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.bootstrapServers">bootstrapServers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersList">DataOciGoldenGateConnectionBootstrapServersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.clientSecretSecretId">clientSecretSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.connectionFactory">connectionFactory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.connectionString">connectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.connectionType">connectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.connectionUrl">connectionUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.consumerProperties">consumerProperties</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.coreSiteXml">coreSiteXml</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.databaseId">databaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.dbSystemId">dbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.deploymentId">deploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.doesUseSecretIds">doesUseSecretIds</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.fingerprint">fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.ingressIps">ingressIps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsList">DataOciGoldenGateConnectionIngressIpsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.isLockOverride">isLockOverride</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.jndiConnectionFactory">jndiConnectionFactory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.jndiInitialContextFactory">jndiInitialContextFactory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.jndiProviderUrl">jndiProviderUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.jndiSecurityCredentials">jndiSecurityCredentials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.jndiSecurityCredentialsSecretId">jndiSecurityCredentialsSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.jndiSecurityPrincipal">jndiSecurityPrincipal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.keyStore">keyStore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.keyStorePassword">keyStorePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.keyStorePasswordSecretId">keyStorePasswordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.keyStoreSecretId">keyStoreSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksList">DataOciGoldenGateConnectionLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.passwordSecretId">passwordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.privateIp">privateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.privateKeyFile">privateKeyFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.privateKeyFileSecretId">privateKeyFileSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.privateKeyPassphrase">privateKeyPassphrase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.privateKeyPassphraseSecretId">privateKeyPassphraseSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.producerProperties">producerProperties</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.publicKeyFingerprint">publicKeyFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.redisClusterId">redisClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.routingMethod">routingMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sasToken">sasToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sasTokenSecretId">sasTokenSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.secretAccessKey">secretAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.secretAccessKeySecretId">secretAccessKeySecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.securityProtocol">securityProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.servers">servers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.serviceAccountKeyFile">serviceAccountKeyFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.serviceAccountKeyFileSecretId">serviceAccountKeyFileSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sessionMode">sessionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.shouldUseJndi">shouldUseJndi</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.shouldValidateServerCertificate">shouldValidateServerCertificate</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sslCa">sslCa</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sslCert">sslCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sslClientKeystash">sslClientKeystash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sslClientKeystashSecretId">sslClientKeystashSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sslClientKeystoredb">sslClientKeystoredb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sslClientKeystoredbSecretId">sslClientKeystoredbSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sslCrl">sslCrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sslKey">sslKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sslKeyPassword">sslKeyPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sslKeyPasswordSecretId">sslKeyPasswordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sslKeySecretId">sslKeySecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sslMode">sslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sslServerCertificate">sslServerCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.streamPoolId">streamPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.technologyType">technologyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.tenancyId">tenancyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.triggerRefresh">triggerRefresh</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.trustStore">trustStore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.trustStorePassword">trustStorePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.trustStorePasswordSecretId">trustStorePasswordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.trustStoreSecretId">trustStoreSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.userId">userId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.vaultId">vaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.wallet">wallet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.walletSecretId">walletSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.connectionIdInput">connectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.connectionId">connectionId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `accessKeyId`<sup>Required</sup> <a name="accessKeyId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.accessKeyId"></a>

```typescript
public readonly accessKeyId: string;
```

- *Type:* string

---

##### `accountKey`<sup>Required</sup> <a name="accountKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.accountKey"></a>

```typescript
public readonly accountKey: string;
```

- *Type:* string

---

##### `accountKeySecretId`<sup>Required</sup> <a name="accountKeySecretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.accountKeySecretId"></a>

```typescript
public readonly accountKeySecretId: string;
```

- *Type:* string

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

---

##### `additionalAttributes`<sup>Required</sup> <a name="additionalAttributes" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.additionalAttributes"></a>

```typescript
public readonly additionalAttributes: DataOciGoldenGateConnectionAdditionalAttributesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesList">DataOciGoldenGateConnectionAdditionalAttributesList</a>

---

##### `authenticationMode`<sup>Required</sup> <a name="authenticationMode" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.authenticationMode"></a>

```typescript
public readonly authenticationMode: string;
```

- *Type:* string

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

---

##### `azureTenantId`<sup>Required</sup> <a name="azureTenantId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.azureTenantId"></a>

```typescript
public readonly azureTenantId: string;
```

- *Type:* string

---

##### `bootstrapServers`<sup>Required</sup> <a name="bootstrapServers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.bootstrapServers"></a>

```typescript
public readonly bootstrapServers: DataOciGoldenGateConnectionBootstrapServersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersList">DataOciGoldenGateConnectionBootstrapServersList</a>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `clientSecretSecretId`<sup>Required</sup> <a name="clientSecretSecretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.clientSecretSecretId"></a>

```typescript
public readonly clientSecretSecretId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `connectionFactory`<sup>Required</sup> <a name="connectionFactory" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.connectionFactory"></a>

```typescript
public readonly connectionFactory: string;
```

- *Type:* string

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.connectionString"></a>

```typescript
public readonly connectionString: string;
```

- *Type:* string

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.connectionType"></a>

```typescript
public readonly connectionType: string;
```

- *Type:* string

---

##### `connectionUrl`<sup>Required</sup> <a name="connectionUrl" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.connectionUrl"></a>

```typescript
public readonly connectionUrl: string;
```

- *Type:* string

---

##### `consumerProperties`<sup>Required</sup> <a name="consumerProperties" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.consumerProperties"></a>

```typescript
public readonly consumerProperties: string;
```

- *Type:* string

---

##### `coreSiteXml`<sup>Required</sup> <a name="coreSiteXml" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.coreSiteXml"></a>

```typescript
public readonly coreSiteXml: string;
```

- *Type:* string

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.databaseId"></a>

```typescript
public readonly databaseId: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.dbSystemId"></a>

```typescript
public readonly dbSystemId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `doesUseSecretIds`<sup>Required</sup> <a name="doesUseSecretIds" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.doesUseSecretIds"></a>

```typescript
public readonly doesUseSecretIds: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.fingerprint"></a>

```typescript
public readonly fingerprint: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `host`<sup>Required</sup> <a name="host" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ingressIps`<sup>Required</sup> <a name="ingressIps" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.ingressIps"></a>

```typescript
public readonly ingressIps: DataOciGoldenGateConnectionIngressIpsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsList">DataOciGoldenGateConnectionIngressIpsList</a>

---

##### `isLockOverride`<sup>Required</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.isLockOverride"></a>

```typescript
public readonly isLockOverride: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `jndiConnectionFactory`<sup>Required</sup> <a name="jndiConnectionFactory" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.jndiConnectionFactory"></a>

```typescript
public readonly jndiConnectionFactory: string;
```

- *Type:* string

---

##### `jndiInitialContextFactory`<sup>Required</sup> <a name="jndiInitialContextFactory" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.jndiInitialContextFactory"></a>

```typescript
public readonly jndiInitialContextFactory: string;
```

- *Type:* string

---

##### `jndiProviderUrl`<sup>Required</sup> <a name="jndiProviderUrl" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.jndiProviderUrl"></a>

```typescript
public readonly jndiProviderUrl: string;
```

- *Type:* string

---

##### `jndiSecurityCredentials`<sup>Required</sup> <a name="jndiSecurityCredentials" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.jndiSecurityCredentials"></a>

```typescript
public readonly jndiSecurityCredentials: string;
```

- *Type:* string

---

##### `jndiSecurityCredentialsSecretId`<sup>Required</sup> <a name="jndiSecurityCredentialsSecretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.jndiSecurityCredentialsSecretId"></a>

```typescript
public readonly jndiSecurityCredentialsSecretId: string;
```

- *Type:* string

---

##### `jndiSecurityPrincipal`<sup>Required</sup> <a name="jndiSecurityPrincipal" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.jndiSecurityPrincipal"></a>

```typescript
public readonly jndiSecurityPrincipal: string;
```

- *Type:* string

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `keyStore`<sup>Required</sup> <a name="keyStore" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.keyStore"></a>

```typescript
public readonly keyStore: string;
```

- *Type:* string

---

##### `keyStorePassword`<sup>Required</sup> <a name="keyStorePassword" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.keyStorePassword"></a>

```typescript
public readonly keyStorePassword: string;
```

- *Type:* string

---

##### `keyStorePasswordSecretId`<sup>Required</sup> <a name="keyStorePasswordSecretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.keyStorePasswordSecretId"></a>

```typescript
public readonly keyStorePasswordSecretId: string;
```

- *Type:* string

---

##### `keyStoreSecretId`<sup>Required</sup> <a name="keyStoreSecretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.keyStoreSecretId"></a>

```typescript
public readonly keyStoreSecretId: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.locks"></a>

```typescript
public readonly locks: DataOciGoldenGateConnectionLocksList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksList">DataOciGoldenGateConnectionLocksList</a>

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `passwordSecretId`<sup>Required</sup> <a name="passwordSecretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.passwordSecretId"></a>

```typescript
public readonly passwordSecretId: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.privateIp"></a>

```typescript
public readonly privateIp: string;
```

- *Type:* string

---

##### `privateKeyFile`<sup>Required</sup> <a name="privateKeyFile" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.privateKeyFile"></a>

```typescript
public readonly privateKeyFile: string;
```

- *Type:* string

---

##### `privateKeyFileSecretId`<sup>Required</sup> <a name="privateKeyFileSecretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.privateKeyFileSecretId"></a>

```typescript
public readonly privateKeyFileSecretId: string;
```

- *Type:* string

---

##### `privateKeyPassphrase`<sup>Required</sup> <a name="privateKeyPassphrase" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.privateKeyPassphrase"></a>

```typescript
public readonly privateKeyPassphrase: string;
```

- *Type:* string

---

##### `privateKeyPassphraseSecretId`<sup>Required</sup> <a name="privateKeyPassphraseSecretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.privateKeyPassphraseSecretId"></a>

```typescript
public readonly privateKeyPassphraseSecretId: string;
```

- *Type:* string

---

##### `producerProperties`<sup>Required</sup> <a name="producerProperties" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.producerProperties"></a>

```typescript
public readonly producerProperties: string;
```

- *Type:* string

---

##### `publicKeyFingerprint`<sup>Required</sup> <a name="publicKeyFingerprint" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.publicKeyFingerprint"></a>

```typescript
public readonly publicKeyFingerprint: string;
```

- *Type:* string

---

##### `redisClusterId`<sup>Required</sup> <a name="redisClusterId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.redisClusterId"></a>

```typescript
public readonly redisClusterId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `routingMethod`<sup>Required</sup> <a name="routingMethod" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.routingMethod"></a>

```typescript
public readonly routingMethod: string;
```

- *Type:* string

---

##### `sasToken`<sup>Required</sup> <a name="sasToken" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sasToken"></a>

```typescript
public readonly sasToken: string;
```

- *Type:* string

---

##### `sasTokenSecretId`<sup>Required</sup> <a name="sasTokenSecretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sasTokenSecretId"></a>

```typescript
public readonly sasTokenSecretId: string;
```

- *Type:* string

---

##### `secretAccessKey`<sup>Required</sup> <a name="secretAccessKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.secretAccessKey"></a>

```typescript
public readonly secretAccessKey: string;
```

- *Type:* string

---

##### `secretAccessKeySecretId`<sup>Required</sup> <a name="secretAccessKeySecretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.secretAccessKeySecretId"></a>

```typescript
public readonly secretAccessKeySecretId: string;
```

- *Type:* string

---

##### `securityProtocol`<sup>Required</sup> <a name="securityProtocol" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.securityProtocol"></a>

```typescript
public readonly securityProtocol: string;
```

- *Type:* string

---

##### `servers`<sup>Required</sup> <a name="servers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.servers"></a>

```typescript
public readonly servers: string;
```

- *Type:* string

---

##### `serviceAccountKeyFile`<sup>Required</sup> <a name="serviceAccountKeyFile" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.serviceAccountKeyFile"></a>

```typescript
public readonly serviceAccountKeyFile: string;
```

- *Type:* string

---

##### `serviceAccountKeyFileSecretId`<sup>Required</sup> <a name="serviceAccountKeyFileSecretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.serviceAccountKeyFileSecretId"></a>

```typescript
public readonly serviceAccountKeyFileSecretId: string;
```

- *Type:* string

---

##### `sessionMode`<sup>Required</sup> <a name="sessionMode" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sessionMode"></a>

```typescript
public readonly sessionMode: string;
```

- *Type:* string

---

##### `shouldUseJndi`<sup>Required</sup> <a name="shouldUseJndi" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.shouldUseJndi"></a>

```typescript
public readonly shouldUseJndi: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `shouldValidateServerCertificate`<sup>Required</sup> <a name="shouldValidateServerCertificate" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.shouldValidateServerCertificate"></a>

```typescript
public readonly shouldValidateServerCertificate: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `sslCa`<sup>Required</sup> <a name="sslCa" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sslCa"></a>

```typescript
public readonly sslCa: string;
```

- *Type:* string

---

##### `sslCert`<sup>Required</sup> <a name="sslCert" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sslCert"></a>

```typescript
public readonly sslCert: string;
```

- *Type:* string

---

##### `sslClientKeystash`<sup>Required</sup> <a name="sslClientKeystash" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sslClientKeystash"></a>

```typescript
public readonly sslClientKeystash: string;
```

- *Type:* string

---

##### `sslClientKeystashSecretId`<sup>Required</sup> <a name="sslClientKeystashSecretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sslClientKeystashSecretId"></a>

```typescript
public readonly sslClientKeystashSecretId: string;
```

- *Type:* string

---

##### `sslClientKeystoredb`<sup>Required</sup> <a name="sslClientKeystoredb" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sslClientKeystoredb"></a>

```typescript
public readonly sslClientKeystoredb: string;
```

- *Type:* string

---

##### `sslClientKeystoredbSecretId`<sup>Required</sup> <a name="sslClientKeystoredbSecretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sslClientKeystoredbSecretId"></a>

```typescript
public readonly sslClientKeystoredbSecretId: string;
```

- *Type:* string

---

##### `sslCrl`<sup>Required</sup> <a name="sslCrl" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sslCrl"></a>

```typescript
public readonly sslCrl: string;
```

- *Type:* string

---

##### `sslKey`<sup>Required</sup> <a name="sslKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sslKey"></a>

```typescript
public readonly sslKey: string;
```

- *Type:* string

---

##### `sslKeyPassword`<sup>Required</sup> <a name="sslKeyPassword" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sslKeyPassword"></a>

```typescript
public readonly sslKeyPassword: string;
```

- *Type:* string

---

##### `sslKeyPasswordSecretId`<sup>Required</sup> <a name="sslKeyPasswordSecretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sslKeyPasswordSecretId"></a>

```typescript
public readonly sslKeyPasswordSecretId: string;
```

- *Type:* string

---

##### `sslKeySecretId`<sup>Required</sup> <a name="sslKeySecretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sslKeySecretId"></a>

```typescript
public readonly sslKeySecretId: string;
```

- *Type:* string

---

##### `sslMode`<sup>Required</sup> <a name="sslMode" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

---

##### `sslServerCertificate`<sup>Required</sup> <a name="sslServerCertificate" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sslServerCertificate"></a>

```typescript
public readonly sslServerCertificate: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `streamPoolId`<sup>Required</sup> <a name="streamPoolId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.streamPoolId"></a>

```typescript
public readonly streamPoolId: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `technologyType`<sup>Required</sup> <a name="technologyType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.technologyType"></a>

```typescript
public readonly technologyType: string;
```

- *Type:* string

---

##### `tenancyId`<sup>Required</sup> <a name="tenancyId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.tenancyId"></a>

```typescript
public readonly tenancyId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `triggerRefresh`<sup>Required</sup> <a name="triggerRefresh" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.triggerRefresh"></a>

```typescript
public readonly triggerRefresh: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `trustStore`<sup>Required</sup> <a name="trustStore" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.trustStore"></a>

```typescript
public readonly trustStore: string;
```

- *Type:* string

---

##### `trustStorePassword`<sup>Required</sup> <a name="trustStorePassword" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.trustStorePassword"></a>

```typescript
public readonly trustStorePassword: string;
```

- *Type:* string

---

##### `trustStorePasswordSecretId`<sup>Required</sup> <a name="trustStorePasswordSecretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.trustStorePasswordSecretId"></a>

```typescript
public readonly trustStorePasswordSecretId: string;
```

- *Type:* string

---

##### `trustStoreSecretId`<sup>Required</sup> <a name="trustStoreSecretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.trustStoreSecretId"></a>

```typescript
public readonly trustStoreSecretId: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `userId`<sup>Required</sup> <a name="userId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.vaultId"></a>

```typescript
public readonly vaultId: string;
```

- *Type:* string

---

##### `wallet`<sup>Required</sup> <a name="wallet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.wallet"></a>

```typescript
public readonly wallet: string;
```

- *Type:* string

---

##### `walletSecretId`<sup>Required</sup> <a name="walletSecretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.walletSecretId"></a>

```typescript
public readonly walletSecretId: string;
```

- *Type:* string

---

##### `connectionIdInput`<sup>Optional</sup> <a name="connectionIdInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.connectionIdInput"></a>

```typescript
public readonly connectionIdInput: string;
```

- *Type:* string

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciGoldenGateConnectionAdditionalAttributes <a name="DataOciGoldenGateConnectionAdditionalAttributes" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributes.Initializer"></a>

```typescript
import { dataOciGoldenGateConnection } from 'rhizo-co-terraform-provider-oci'

const dataOciGoldenGateConnectionAdditionalAttributes: dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributes = { ... }
```


### DataOciGoldenGateConnectionBootstrapServers <a name="DataOciGoldenGateConnectionBootstrapServers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServers.Initializer"></a>

```typescript
import { dataOciGoldenGateConnection } from 'rhizo-co-terraform-provider-oci'

const dataOciGoldenGateConnectionBootstrapServers: dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServers = { ... }
```


### DataOciGoldenGateConnectionConfig <a name="DataOciGoldenGateConnectionConfig" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionConfig.Initializer"></a>

```typescript
import { dataOciGoldenGateConnection } from 'rhizo-co-terraform-provider-oci'

const dataOciGoldenGateConnectionConfig: dataOciGoldenGateConnection.DataOciGoldenGateConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionConfig.property.connectionId">connectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connection#connection_id DataOciGoldenGateConnection#connection_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionConfig.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connection#connection_id DataOciGoldenGateConnection#connection_id}.

---

### DataOciGoldenGateConnectionIngressIps <a name="DataOciGoldenGateConnectionIngressIps" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIps.Initializer"></a>

```typescript
import { dataOciGoldenGateConnection } from 'rhizo-co-terraform-provider-oci'

const dataOciGoldenGateConnectionIngressIps: dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIps = { ... }
```


### DataOciGoldenGateConnectionLocks <a name="DataOciGoldenGateConnectionLocks" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocks.Initializer"></a>

```typescript
import { dataOciGoldenGateConnection } from 'rhizo-co-terraform-provider-oci'

const dataOciGoldenGateConnectionLocks: dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocks = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciGoldenGateConnectionAdditionalAttributesList <a name="DataOciGoldenGateConnectionAdditionalAttributesList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesList.Initializer"></a>

```typescript
import { dataOciGoldenGateConnection } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesList.get"></a>

```typescript
public get(index: number): DataOciGoldenGateConnectionAdditionalAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciGoldenGateConnectionAdditionalAttributesOutputReference <a name="DataOciGoldenGateConnectionAdditionalAttributesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.Initializer"></a>

```typescript
import { dataOciGoldenGateConnection } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributes">DataOciGoldenGateConnectionAdditionalAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciGoldenGateConnectionAdditionalAttributes;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributes">DataOciGoldenGateConnectionAdditionalAttributes</a>

---


### DataOciGoldenGateConnectionBootstrapServersList <a name="DataOciGoldenGateConnectionBootstrapServersList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersList.Initializer"></a>

```typescript
import { dataOciGoldenGateConnection } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersList.get"></a>

```typescript
public get(index: number): DataOciGoldenGateConnectionBootstrapServersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciGoldenGateConnectionBootstrapServersOutputReference <a name="DataOciGoldenGateConnectionBootstrapServersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.Initializer"></a>

```typescript
import { dataOciGoldenGateConnection } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.property.privateIp">privateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServers">DataOciGoldenGateConnectionBootstrapServers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.property.privateIp"></a>

```typescript
public readonly privateIp: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciGoldenGateConnectionBootstrapServers;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServers">DataOciGoldenGateConnectionBootstrapServers</a>

---


### DataOciGoldenGateConnectionIngressIpsList <a name="DataOciGoldenGateConnectionIngressIpsList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsList.Initializer"></a>

```typescript
import { dataOciGoldenGateConnection } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsList.get"></a>

```typescript
public get(index: number): DataOciGoldenGateConnectionIngressIpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciGoldenGateConnectionIngressIpsOutputReference <a name="DataOciGoldenGateConnectionIngressIpsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.Initializer"></a>

```typescript
import { dataOciGoldenGateConnection } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.property.ingressIp">ingressIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIps">DataOciGoldenGateConnectionIngressIps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ingressIp`<sup>Required</sup> <a name="ingressIp" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.property.ingressIp"></a>

```typescript
public readonly ingressIp: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciGoldenGateConnectionIngressIps;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIps">DataOciGoldenGateConnectionIngressIps</a>

---


### DataOciGoldenGateConnectionLocksList <a name="DataOciGoldenGateConnectionLocksList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksList.Initializer"></a>

```typescript
import { dataOciGoldenGateConnection } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksList.get"></a>

```typescript
public get(index: number): DataOciGoldenGateConnectionLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciGoldenGateConnectionLocksOutputReference <a name="DataOciGoldenGateConnectionLocksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.Initializer"></a>

```typescript
import { dataOciGoldenGateConnection } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.property.relatedResourceId">relatedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocks">DataOciGoldenGateConnectionLocks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `relatedResourceId`<sup>Required</sup> <a name="relatedResourceId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.property.relatedResourceId"></a>

```typescript
public readonly relatedResourceId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciGoldenGateConnectionLocks;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocks">DataOciGoldenGateConnectionLocks</a>

---



