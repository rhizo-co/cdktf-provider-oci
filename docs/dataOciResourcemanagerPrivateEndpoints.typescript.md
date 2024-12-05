# `dataOciResourcemanagerPrivateEndpoints` Submodule <a name="`dataOciResourcemanagerPrivateEndpoints` Submodule" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciResourcemanagerPrivateEndpoints <a name="DataOciResourcemanagerPrivateEndpoints" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resourcemanager_private_endpoints oci_resourcemanager_private_endpoints}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.Initializer"></a>

```typescript
import { dataOciResourcemanagerPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

new dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints(scope: Construct, id: string, config?: DataOciResourcemanagerPrivateEndpointsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsConfig">DataOciResourcemanagerPrivateEndpointsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsConfig">DataOciResourcemanagerPrivateEndpointsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.resetPrivateEndpointId">resetPrivateEndpointId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.resetVcnId">resetVcnId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciResourcemanagerPrivateEndpointsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilter">DataOciResourcemanagerPrivateEndpointsFilter</a>[]

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPrivateEndpointId` <a name="resetPrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.resetPrivateEndpointId"></a>

```typescript
public resetPrivateEndpointId(): void
```

##### `resetVcnId` <a name="resetVcnId" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.resetVcnId"></a>

```typescript
public resetVcnId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciResourcemanagerPrivateEndpoints resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.isConstruct"></a>

```typescript
import { dataOciResourcemanagerPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.isTerraformElement"></a>

```typescript
import { dataOciResourcemanagerPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.isTerraformDataSource"></a>

```typescript
import { dataOciResourcemanagerPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.generateConfigForImport"></a>

```typescript
import { dataOciResourcemanagerPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciResourcemanagerPrivateEndpoints resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciResourcemanagerPrivateEndpoints to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciResourcemanagerPrivateEndpoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resourcemanager_private_endpoints#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciResourcemanagerPrivateEndpoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterList">DataOciResourcemanagerPrivateEndpointsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.property.privateEndpointCollection">privateEndpointCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionList">DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilter">DataOciResourcemanagerPrivateEndpointsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.property.privateEndpointIdInput">privateEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.property.vcnIdInput">vcnIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.property.privateEndpointId">privateEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.property.vcnId">vcnId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.property.filter"></a>

```typescript
public readonly filter: DataOciResourcemanagerPrivateEndpointsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterList">DataOciResourcemanagerPrivateEndpointsFilterList</a>

---

##### `privateEndpointCollection`<sup>Required</sup> <a name="privateEndpointCollection" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.property.privateEndpointCollection"></a>

```typescript
public readonly privateEndpointCollection: DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionList">DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciResourcemanagerPrivateEndpointsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilter">DataOciResourcemanagerPrivateEndpointsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `privateEndpointIdInput`<sup>Optional</sup> <a name="privateEndpointIdInput" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.property.privateEndpointIdInput"></a>

```typescript
public readonly privateEndpointIdInput: string;
```

- *Type:* string

---

##### `vcnIdInput`<sup>Optional</sup> <a name="vcnIdInput" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.property.vcnIdInput"></a>

```typescript
public readonly vcnIdInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `privateEndpointId`<sup>Required</sup> <a name="privateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.property.privateEndpointId"></a>

```typescript
public readonly privateEndpointId: string;
```

- *Type:* string

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.property.vcnId"></a>

```typescript
public readonly vcnId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpoints.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciResourcemanagerPrivateEndpointsConfig <a name="DataOciResourcemanagerPrivateEndpointsConfig" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsConfig.Initializer"></a>

```typescript
import { dataOciResourcemanagerPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

const dataOciResourcemanagerPrivateEndpointsConfig: dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resourcemanager_private_endpoints#compartment_id DataOciResourcemanagerPrivateEndpoints#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resourcemanager_private_endpoints#display_name DataOciResourcemanagerPrivateEndpoints#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilter">DataOciResourcemanagerPrivateEndpointsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resourcemanager_private_endpoints#id DataOciResourcemanagerPrivateEndpoints#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsConfig.property.privateEndpointId">privateEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resourcemanager_private_endpoints#private_endpoint_id DataOciResourcemanagerPrivateEndpoints#private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsConfig.property.vcnId">vcnId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resourcemanager_private_endpoints#vcn_id DataOciResourcemanagerPrivateEndpoints#vcn_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resourcemanager_private_endpoints#compartment_id DataOciResourcemanagerPrivateEndpoints#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resourcemanager_private_endpoints#display_name DataOciResourcemanagerPrivateEndpoints#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciResourcemanagerPrivateEndpointsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilter">DataOciResourcemanagerPrivateEndpointsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resourcemanager_private_endpoints#filter DataOciResourcemanagerPrivateEndpoints#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resourcemanager_private_endpoints#id DataOciResourcemanagerPrivateEndpoints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `privateEndpointId`<sup>Optional</sup> <a name="privateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsConfig.property.privateEndpointId"></a>

```typescript
public readonly privateEndpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resourcemanager_private_endpoints#private_endpoint_id DataOciResourcemanagerPrivateEndpoints#private_endpoint_id}.

---

##### `vcnId`<sup>Optional</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsConfig.property.vcnId"></a>

```typescript
public readonly vcnId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resourcemanager_private_endpoints#vcn_id DataOciResourcemanagerPrivateEndpoints#vcn_id}.

---

### DataOciResourcemanagerPrivateEndpointsFilter <a name="DataOciResourcemanagerPrivateEndpointsFilter" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilter.Initializer"></a>

```typescript
import { dataOciResourcemanagerPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

const dataOciResourcemanagerPrivateEndpointsFilter: dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resourcemanager_private_endpoints#name DataOciResourcemanagerPrivateEndpoints#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resourcemanager_private_endpoints#values DataOciResourcemanagerPrivateEndpoints#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resourcemanager_private_endpoints#regex DataOciResourcemanagerPrivateEndpoints#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resourcemanager_private_endpoints#name DataOciResourcemanagerPrivateEndpoints#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resourcemanager_private_endpoints#values DataOciResourcemanagerPrivateEndpoints#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resourcemanager_private_endpoints#regex DataOciResourcemanagerPrivateEndpoints#regex}.

---

### DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollection <a name="DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollection" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollection.Initializer"></a>

```typescript
import { dataOciResourcemanagerPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

const dataOciResourcemanagerPrivateEndpointsPrivateEndpointCollection: dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollection = { ... }
```


### DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItems <a name="DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItems.Initializer"></a>

```typescript
import { dataOciResourcemanagerPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

const dataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItems: dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciResourcemanagerPrivateEndpointsFilterList <a name="DataOciResourcemanagerPrivateEndpointsFilterList" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterList.Initializer"></a>

```typescript
import { dataOciResourcemanagerPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

new dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterList.get"></a>

```typescript
public get(index: number): DataOciResourcemanagerPrivateEndpointsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilter">DataOciResourcemanagerPrivateEndpointsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciResourcemanagerPrivateEndpointsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilter">DataOciResourcemanagerPrivateEndpointsFilter</a>[]

---


### DataOciResourcemanagerPrivateEndpointsFilterOutputReference <a name="DataOciResourcemanagerPrivateEndpointsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciResourcemanagerPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

new dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilter">DataOciResourcemanagerPrivateEndpointsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciResourcemanagerPrivateEndpointsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsFilter">DataOciResourcemanagerPrivateEndpointsFilter</a>

---


### DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsList <a name="DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsList.Initializer"></a>

```typescript
import { dataOciResourcemanagerPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

new dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference <a name="DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciResourcemanagerPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

new dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.dnsZones">dnsZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.isUsedWithConfigurationSourceProvider">isUsedWithConfigurationSourceProvider</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.nsgIdList">nsgIdList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.sourceIps">sourceIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.vcnId">vcnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItems">DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `dnsZones`<sup>Required</sup> <a name="dnsZones" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.dnsZones"></a>

```typescript
public readonly dnsZones: string[];
```

- *Type:* string[]

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isUsedWithConfigurationSourceProvider`<sup>Required</sup> <a name="isUsedWithConfigurationSourceProvider" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.isUsedWithConfigurationSourceProvider"></a>

```typescript
public readonly isUsedWithConfigurationSourceProvider: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `nsgIdList`<sup>Required</sup> <a name="nsgIdList" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.nsgIdList"></a>

```typescript
public readonly nsgIdList: string[];
```

- *Type:* string[]

---

##### `sourceIps`<sup>Required</sup> <a name="sourceIps" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.sourceIps"></a>

```typescript
public readonly sourceIps: string[];
```

- *Type:* string[]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.vcnId"></a>

```typescript
public readonly vcnId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItems">DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItems</a>

---


### DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionList <a name="DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionList" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionList.Initializer"></a>

```typescript
import { dataOciResourcemanagerPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

new dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionList.get"></a>

```typescript
public get(index: number): DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference <a name="DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciResourcemanagerPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

new dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsList">DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollection">DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsList">DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpoints.DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollection">DataOciResourcemanagerPrivateEndpointsPrivateEndpointCollection</a>

---



