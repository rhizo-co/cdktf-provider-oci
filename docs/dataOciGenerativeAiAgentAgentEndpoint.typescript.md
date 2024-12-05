# `dataOciGenerativeAiAgentAgentEndpoint` Submodule <a name="`dataOciGenerativeAiAgentAgentEndpoint` Submodule" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciGenerativeAiAgentAgentEndpoint <a name="DataOciGenerativeAiAgentAgentEndpoint" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoint oci_generative_ai_agent_agent_endpoint}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.Initializer"></a>

```typescript
import { dataOciGenerativeAiAgentAgentEndpoint } from 'rhizo-co-terraform-provider-oci'

new dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint(scope: Construct, id: string, config: DataOciGenerativeAiAgentAgentEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointConfig">DataOciGenerativeAiAgentAgentEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointConfig">DataOciGenerativeAiAgentAgentEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciGenerativeAiAgentAgentEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.isConstruct"></a>

```typescript
import { dataOciGenerativeAiAgentAgentEndpoint } from 'rhizo-co-terraform-provider-oci'

dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.isTerraformElement"></a>

```typescript
import { dataOciGenerativeAiAgentAgentEndpoint } from 'rhizo-co-terraform-provider-oci'

dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.isTerraformDataSource"></a>

```typescript
import { dataOciGenerativeAiAgentAgentEndpoint } from 'rhizo-co-terraform-provider-oci'

dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.generateConfigForImport"></a>

```typescript
import { dataOciGenerativeAiAgentAgentEndpoint } from 'rhizo-co-terraform-provider-oci'

dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciGenerativeAiAgentAgentEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciGenerativeAiAgentAgentEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciGenerativeAiAgentAgentEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciGenerativeAiAgentAgentEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.agentId">agentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.contentModerationConfig">contentModerationConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList">DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.sessionConfig">sessionConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigList">DataOciGenerativeAiAgentAgentEndpointSessionConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.shouldEnableCitation">shouldEnableCitation</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.shouldEnableSession">shouldEnableSession</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.shouldEnableTrace">shouldEnableTrace</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.agentEndpointIdInput">agentEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.agentEndpointId">agentEndpointId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.agentId"></a>

```typescript
public readonly agentId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `contentModerationConfig`<sup>Required</sup> <a name="contentModerationConfig" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.contentModerationConfig"></a>

```typescript
public readonly contentModerationConfig: DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList">DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList</a>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `sessionConfig`<sup>Required</sup> <a name="sessionConfig" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.sessionConfig"></a>

```typescript
public readonly sessionConfig: DataOciGenerativeAiAgentAgentEndpointSessionConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigList">DataOciGenerativeAiAgentAgentEndpointSessionConfigList</a>

---

##### `shouldEnableCitation`<sup>Required</sup> <a name="shouldEnableCitation" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.shouldEnableCitation"></a>

```typescript
public readonly shouldEnableCitation: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `shouldEnableSession`<sup>Required</sup> <a name="shouldEnableSession" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.shouldEnableSession"></a>

```typescript
public readonly shouldEnableSession: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `shouldEnableTrace`<sup>Required</sup> <a name="shouldEnableTrace" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.shouldEnableTrace"></a>

```typescript
public readonly shouldEnableTrace: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `agentEndpointIdInput`<sup>Optional</sup> <a name="agentEndpointIdInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.agentEndpointIdInput"></a>

```typescript
public readonly agentEndpointIdInput: string;
```

- *Type:* string

---

##### `agentEndpointId`<sup>Required</sup> <a name="agentEndpointId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.agentEndpointId"></a>

```typescript
public readonly agentEndpointId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciGenerativeAiAgentAgentEndpointConfig <a name="DataOciGenerativeAiAgentAgentEndpointConfig" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointConfig.Initializer"></a>

```typescript
import { dataOciGenerativeAiAgentAgentEndpoint } from 'rhizo-co-terraform-provider-oci'

const dataOciGenerativeAiAgentAgentEndpointConfig: dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointConfig.property.agentEndpointId">agentEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoint#agent_endpoint_id DataOciGenerativeAiAgentAgentEndpoint#agent_endpoint_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `agentEndpointId`<sup>Required</sup> <a name="agentEndpointId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointConfig.property.agentEndpointId"></a>

```typescript
public readonly agentEndpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoint#agent_endpoint_id DataOciGenerativeAiAgentAgentEndpoint#agent_endpoint_id}.

---

### DataOciGenerativeAiAgentAgentEndpointContentModerationConfig <a name="DataOciGenerativeAiAgentAgentEndpointContentModerationConfig" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfig.Initializer"></a>

```typescript
import { dataOciGenerativeAiAgentAgentEndpoint } from 'rhizo-co-terraform-provider-oci'

const dataOciGenerativeAiAgentAgentEndpointContentModerationConfig: dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfig = { ... }
```


### DataOciGenerativeAiAgentAgentEndpointSessionConfig <a name="DataOciGenerativeAiAgentAgentEndpointSessionConfig" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfig.Initializer"></a>

```typescript
import { dataOciGenerativeAiAgentAgentEndpoint } from 'rhizo-co-terraform-provider-oci'

const dataOciGenerativeAiAgentAgentEndpointSessionConfig: dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfig = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList <a name="DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList.Initializer"></a>

```typescript
import { dataOciGenerativeAiAgentAgentEndpoint } from 'rhizo-co-terraform-provider-oci'

new dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList.get"></a>

```typescript
public get(index: number): DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference <a name="DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.Initializer"></a>

```typescript
import { dataOciGenerativeAiAgentAgentEndpoint } from 'rhizo-co-terraform-provider-oci'

new dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.shouldEnableOnInput">shouldEnableOnInput</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.shouldEnableOnOutput">shouldEnableOnOutput</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfig">DataOciGenerativeAiAgentAgentEndpointContentModerationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `shouldEnableOnInput`<sup>Required</sup> <a name="shouldEnableOnInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.shouldEnableOnInput"></a>

```typescript
public readonly shouldEnableOnInput: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `shouldEnableOnOutput`<sup>Required</sup> <a name="shouldEnableOnOutput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.shouldEnableOnOutput"></a>

```typescript
public readonly shouldEnableOnOutput: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciGenerativeAiAgentAgentEndpointContentModerationConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfig">DataOciGenerativeAiAgentAgentEndpointContentModerationConfig</a>

---


### DataOciGenerativeAiAgentAgentEndpointSessionConfigList <a name="DataOciGenerativeAiAgentAgentEndpointSessionConfigList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigList.Initializer"></a>

```typescript
import { dataOciGenerativeAiAgentAgentEndpoint } from 'rhizo-co-terraform-provider-oci'

new dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigList.get"></a>

```typescript
public get(index: number): DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference <a name="DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.Initializer"></a>

```typescript
import { dataOciGenerativeAiAgentAgentEndpoint } from 'rhizo-co-terraform-provider-oci'

new dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.property.idleTimeoutInSeconds">idleTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfig">DataOciGenerativeAiAgentAgentEndpointSessionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idleTimeoutInSeconds`<sup>Required</sup> <a name="idleTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.property.idleTimeoutInSeconds"></a>

```typescript
public readonly idleTimeoutInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciGenerativeAiAgentAgentEndpointSessionConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfig">DataOciGenerativeAiAgentAgentEndpointSessionConfig</a>

---



