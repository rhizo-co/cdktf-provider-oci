# `dataOciFileStorageOutboundConnector` Submodule <a name="`dataOciFileStorageOutboundConnector` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFileStorageOutboundConnector <a name="DataOciFileStorageOutboundConnector" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connector oci_file_storage_outbound_connector}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.Initializer"></a>

```typescript
import { dataOciFileStorageOutboundConnector } from 'rhizo-co-terraform-provider-oci'

new dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector(scope: Construct, id: string, config: DataOciFileStorageOutboundConnectorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorConfig">DataOciFileStorageOutboundConnectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorConfig">DataOciFileStorageOutboundConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFileStorageOutboundConnector resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.isConstruct"></a>

```typescript
import { dataOciFileStorageOutboundConnector } from 'rhizo-co-terraform-provider-oci'

dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.isTerraformElement"></a>

```typescript
import { dataOciFileStorageOutboundConnector } from 'rhizo-co-terraform-provider-oci'

dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.isTerraformDataSource"></a>

```typescript
import { dataOciFileStorageOutboundConnector } from 'rhizo-co-terraform-provider-oci'

dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.generateConfigForImport"></a>

```typescript
import { dataOciFileStorageOutboundConnector } from 'rhizo-co-terraform-provider-oci'

dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciFileStorageOutboundConnector resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciFileStorageOutboundConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciFileStorageOutboundConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFileStorageOutboundConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.bindDistinguishedName">bindDistinguishedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.connectorType">connectorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.endpoints">endpoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsList">DataOciFileStorageOutboundConnectorEndpointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.isLockOverride">isLockOverride</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksList">DataOciFileStorageOutboundConnectorLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.passwordSecretId">passwordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.passwordSecretVersion">passwordSecretVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.outboundConnectorIdInput">outboundConnectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.outboundConnectorId">outboundConnectorId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `bindDistinguishedName`<sup>Required</sup> <a name="bindDistinguishedName" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.bindDistinguishedName"></a>

```typescript
public readonly bindDistinguishedName: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `connectorType`<sup>Required</sup> <a name="connectorType" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.connectorType"></a>

```typescript
public readonly connectorType: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.endpoints"></a>

```typescript
public readonly endpoints: DataOciFileStorageOutboundConnectorEndpointsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsList">DataOciFileStorageOutboundConnectorEndpointsList</a>

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isLockOverride`<sup>Required</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.isLockOverride"></a>

```typescript
public readonly isLockOverride: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.locks"></a>

```typescript
public readonly locks: DataOciFileStorageOutboundConnectorLocksList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksList">DataOciFileStorageOutboundConnectorLocksList</a>

---

##### `passwordSecretId`<sup>Required</sup> <a name="passwordSecretId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.passwordSecretId"></a>

```typescript
public readonly passwordSecretId: string;
```

- *Type:* string

---

##### `passwordSecretVersion`<sup>Required</sup> <a name="passwordSecretVersion" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.passwordSecretVersion"></a>

```typescript
public readonly passwordSecretVersion: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `outboundConnectorIdInput`<sup>Optional</sup> <a name="outboundConnectorIdInput" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.outboundConnectorIdInput"></a>

```typescript
public readonly outboundConnectorIdInput: string;
```

- *Type:* string

---

##### `outboundConnectorId`<sup>Required</sup> <a name="outboundConnectorId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.outboundConnectorId"></a>

```typescript
public readonly outboundConnectorId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnector.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFileStorageOutboundConnectorConfig <a name="DataOciFileStorageOutboundConnectorConfig" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorConfig.Initializer"></a>

```typescript
import { dataOciFileStorageOutboundConnector } from 'rhizo-co-terraform-provider-oci'

const dataOciFileStorageOutboundConnectorConfig: dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorConfig.property.outboundConnectorId">outboundConnectorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connector#outbound_connector_id DataOciFileStorageOutboundConnector#outbound_connector_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `outboundConnectorId`<sup>Required</sup> <a name="outboundConnectorId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorConfig.property.outboundConnectorId"></a>

```typescript
public readonly outboundConnectorId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connector#outbound_connector_id DataOciFileStorageOutboundConnector#outbound_connector_id}.

---

### DataOciFileStorageOutboundConnectorEndpoints <a name="DataOciFileStorageOutboundConnectorEndpoints" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpoints.Initializer"></a>

```typescript
import { dataOciFileStorageOutboundConnector } from 'rhizo-co-terraform-provider-oci'

const dataOciFileStorageOutboundConnectorEndpoints: dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpoints = { ... }
```


### DataOciFileStorageOutboundConnectorLocks <a name="DataOciFileStorageOutboundConnectorLocks" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocks.Initializer"></a>

```typescript
import { dataOciFileStorageOutboundConnector } from 'rhizo-co-terraform-provider-oci'

const dataOciFileStorageOutboundConnectorLocks: dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocks = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFileStorageOutboundConnectorEndpointsList <a name="DataOciFileStorageOutboundConnectorEndpointsList" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsList.Initializer"></a>

```typescript
import { dataOciFileStorageOutboundConnector } from 'rhizo-co-terraform-provider-oci'

new dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsList.get"></a>

```typescript
public get(index: number): DataOciFileStorageOutboundConnectorEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFileStorageOutboundConnectorEndpointsOutputReference <a name="DataOciFileStorageOutboundConnectorEndpointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference.Initializer"></a>

```typescript
import { dataOciFileStorageOutboundConnector } from 'rhizo-co-terraform-provider-oci'

new dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference.property.port">port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpoints">DataOciFileStorageOutboundConnectorEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFileStorageOutboundConnectorEndpoints;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorEndpoints">DataOciFileStorageOutboundConnectorEndpoints</a>

---


### DataOciFileStorageOutboundConnectorLocksList <a name="DataOciFileStorageOutboundConnectorLocksList" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksList.Initializer"></a>

```typescript
import { dataOciFileStorageOutboundConnector } from 'rhizo-co-terraform-provider-oci'

new dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksList.get"></a>

```typescript
public get(index: number): DataOciFileStorageOutboundConnectorLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFileStorageOutboundConnectorLocksOutputReference <a name="DataOciFileStorageOutboundConnectorLocksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.Initializer"></a>

```typescript
import { dataOciFileStorageOutboundConnector } from 'rhizo-co-terraform-provider-oci'

new dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.property.relatedResourceId">relatedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocks">DataOciFileStorageOutboundConnectorLocks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `relatedResourceId`<sup>Required</sup> <a name="relatedResourceId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.property.relatedResourceId"></a>

```typescript
public readonly relatedResourceId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFileStorageOutboundConnectorLocks;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnector.DataOciFileStorageOutboundConnectorLocks">DataOciFileStorageOutboundConnectorLocks</a>

---



