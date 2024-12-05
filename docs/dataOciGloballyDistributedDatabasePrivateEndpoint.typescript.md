# `dataOciGloballyDistributedDatabasePrivateEndpoint` Submodule <a name="`dataOciGloballyDistributedDatabasePrivateEndpoint` Submodule" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciGloballyDistributedDatabasePrivateEndpoint <a name="DataOciGloballyDistributedDatabasePrivateEndpoint" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/globally_distributed_database_private_endpoint oci_globally_distributed_database_private_endpoint}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.Initializer"></a>

```typescript
import { dataOciGloballyDistributedDatabasePrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

new dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint(scope: Construct, id: string, config: DataOciGloballyDistributedDatabasePrivateEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpointConfig">DataOciGloballyDistributedDatabasePrivateEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpointConfig">DataOciGloballyDistributedDatabasePrivateEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciGloballyDistributedDatabasePrivateEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.isConstruct"></a>

```typescript
import { dataOciGloballyDistributedDatabasePrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.isTerraformElement"></a>

```typescript
import { dataOciGloballyDistributedDatabasePrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.isTerraformDataSource"></a>

```typescript
import { dataOciGloballyDistributedDatabasePrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.generateConfigForImport"></a>

```typescript
import { dataOciGloballyDistributedDatabasePrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciGloballyDistributedDatabasePrivateEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciGloballyDistributedDatabasePrivateEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciGloballyDistributedDatabasePrivateEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/globally_distributed_database_private_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciGloballyDistributedDatabasePrivateEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.lifecycleStateDetails">lifecycleStateDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.privateIp">privateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.proxyComputeInstanceId">proxyComputeInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.reinstateProxyInstanceTrigger">reinstateProxyInstanceTrigger</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.shardedDatabases">shardedDatabases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.vcnId">vcnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.privateEndpointIdInput">privateEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.privateEndpointId">privateEndpointId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleStateDetails`<sup>Required</sup> <a name="lifecycleStateDetails" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.lifecycleStateDetails"></a>

```typescript
public readonly lifecycleStateDetails: string;
```

- *Type:* string

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.privateIp"></a>

```typescript
public readonly privateIp: string;
```

- *Type:* string

---

##### `proxyComputeInstanceId`<sup>Required</sup> <a name="proxyComputeInstanceId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.proxyComputeInstanceId"></a>

```typescript
public readonly proxyComputeInstanceId: string;
```

- *Type:* string

---

##### `reinstateProxyInstanceTrigger`<sup>Required</sup> <a name="reinstateProxyInstanceTrigger" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.reinstateProxyInstanceTrigger"></a>

```typescript
public readonly reinstateProxyInstanceTrigger: number;
```

- *Type:* number

---

##### `shardedDatabases`<sup>Required</sup> <a name="shardedDatabases" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.shardedDatabases"></a>

```typescript
public readonly shardedDatabases: string[];
```

- *Type:* string[]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.vcnId"></a>

```typescript
public readonly vcnId: string;
```

- *Type:* string

---

##### `privateEndpointIdInput`<sup>Optional</sup> <a name="privateEndpointIdInput" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.privateEndpointIdInput"></a>

```typescript
public readonly privateEndpointIdInput: string;
```

- *Type:* string

---

##### `privateEndpointId`<sup>Required</sup> <a name="privateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.privateEndpointId"></a>

```typescript
public readonly privateEndpointId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciGloballyDistributedDatabasePrivateEndpointConfig <a name="DataOciGloballyDistributedDatabasePrivateEndpointConfig" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpointConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpointConfig.Initializer"></a>

```typescript
import { dataOciGloballyDistributedDatabasePrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

const dataOciGloballyDistributedDatabasePrivateEndpointConfig: dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpointConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpointConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpointConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpointConfig.property.privateEndpointId">privateEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/globally_distributed_database_private_endpoint#private_endpoint_id DataOciGloballyDistributedDatabasePrivateEndpoint#private_endpoint_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `privateEndpointId`<sup>Required</sup> <a name="privateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpointConfig.property.privateEndpointId"></a>

```typescript
public readonly privateEndpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/globally_distributed_database_private_endpoint#private_endpoint_id DataOciGloballyDistributedDatabasePrivateEndpoint#private_endpoint_id}.

---



